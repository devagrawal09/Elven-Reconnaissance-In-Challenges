import { NextFunction, Router, Request, Response } from 'express';
import { DummyData } from '../data/dummy';
import { GroupId, GroupModel } from '@/models/group.model';
import { ChallengeId, ChallengeModel } from '@/models/challenge.model';
import { GroupLangModel } from '@/models/group-lang.model';
import { sequelize } from '@/databases';

export const router = Router();

router.get(`/`, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = req.query;

    const cs = await ChallengeModel.findAll({
      include: [
        {
          association: 'group',
          include: [`langs`],
        },
      ],
    });

    const challenges = cs.map(c => c.get({ plain: true }));

    const data = JSON.stringify(
      challenges.map(({ description, ...c }) => ({
        ...c,
        summary: `${c.summary.substring(0, 100)}...`,
      })),
    );

    console.log({ query });

    res.render('index', { title: 'Express', data });
  } catch (error) {
    next(error);
  }
});

router.get(`/sync`, async (req: Request, res: Response) => {
  const guilds = new Map<string, GroupModel>();
  const challenges: ChallengeModel[] = [];

  DummyData.forEach(({ group, ...c }) => {
    let guild = guilds.get(group.id);
    if (!guild) {
      guild = GroupModel.build({
        id: group.id as GroupId,
        name: group.name,
        langAll: group.langAll,
        classification: group.classification,
        subclassification: group.subclassification,
        memberColor: group.memberColor,
      });

      const guildLangs: GroupLangModel[] = [];

      if (group.lang.length) {
        group.lang.forEach(lang => {
          guildLangs.push(GroupLangModel.build({ lang }));
        });
      }

      if (group.langPrimary.length) {
        group.langPrimary.forEach(lang => {
          guildLangs.push(GroupLangModel.build({ lang, primary: true }));
        });
      }

      guild.setDataValue('langs', guildLangs);

      guilds.set(group.id, guild);
    }

    const challenge = ChallengeModel.build({
      ...c,
      id: c.id as ChallengeId,
      created: new Date(c.created),
      updated: new Date(c.updated),
      groupId: guild.getDataValue('id'),
    });

    challenges.push(challenge);
  });

  const rows = await sequelize.transaction(async transaction => {
    const allGroupsCountBefore = await GroupModel.count();
    const allChallengesCountBefore = await ChallengeModel.count();

    console.log(`Removing ${allGroupsCountBefore} groups...`);
    await GroupLangModel.destroy({ where: {}, transaction });
    await GroupModel.destroy({ where: {}, transaction });
    console.log(`Removing all groups... done`);

    console.log(`Removing ${allChallengesCountBefore} challenges...`);
    await ChallengeModel.destroy({ where: {}, transaction });
    console.log(`Removing all challenges... done`);

    console.log(`Recreating all groups...`);
    await Promise.all([...guilds].map(([, guild]) => guild.saveGroup(transaction)));
    console.log(`Recreating all groups... done`);

    console.log(`Recreating all challenges...`);
    await Promise.all(challenges.map(challenge => challenge.save({ transaction })));
    console.log(`Recreating all challenges... done`);

    const { rows, count } = await ChallengeModel.findAndCountAll({
      include: [
        {
          association: 'group',
          include: [`langs`],
        },
      ],
      transaction,
    });

    console.log(`All challenges count: ${count}`);

    return rows;
  });

  res.json(rows);
});
