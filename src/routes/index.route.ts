import { NextFunction, Router, Request, Response } from 'express';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { IChallengeDto } from '../data/dummy';
import { GroupId, GroupModel } from '@/models/group.model';
import { ChallengeId, ChallengeModel } from '@/models/challenge.model';
import { GroupLangModel } from '@/models/group-lang.model';
import { sequelize } from '@/databases';
import { SearchConfig, SearchParams } from '@/dtos';
import { SearchParamsToSequelizeQuery } from '@/search';
import axios from 'axios';

export const router = Router();

router.get(`/`, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = plainToClass(SearchParams, req.query);
    const validationErrors = await validate(query);

    if (validationErrors.length > 0) {
      validationErrors.forEach(
        error =>
          error.constraints &&
          Object.values(error.constraints).forEach(e => console.error(`\t${e}`)),
      );
      throw new Error('Validation error');
    }

    res.render('index', { title: 'Express', query, config: SearchConfig });
  } catch (error) {
    next(error);
  }
});

router.get(`/data`, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = plainToClass(SearchParams, req.query);
    const validationErrors = await validate(query);

    if (validationErrors.length > 0) {
      validationErrors.forEach(
        error =>
          error.constraints &&
          Object.values(error.constraints).forEach(e => console.error(`\t${e}`)),
      );
      throw new Error('Validation error');
    }

    const cs = await ChallengeModel.findAll({
      include: [
        {
          association: 'group',
          include: [`langs`],
        },
      ],
      where: SearchParamsToSequelizeQuery(query),
      subQuery: false,
      limit: 200,
    });

    const challenges = cs.map(c => c.get());

    res.json(challenges);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get(`/sync`, async (req: Request, res: Response, next) => {
  try {
    const guilds = new Map<string, GroupModel>();
    const challenges: ChallengeModel[] = [];

    console.log(`Fetching data from oldgods...`);

    const ericDataRes = await axios.get(
      `https://oldgods.net/habitica/cTheDragons/piratetools/common/stat/eric.json`,
    );
    const ericData = ericDataRes.data;
    const newChallenges = ericData.challenges as IChallengeDto[];

    console.log(`fetched ${newChallenges.length} challenges from oldgods`);

    newChallenges.forEach(({ group, ...c }) => {
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

        if (group.lang?.length) {
          group.lang.forEach(lang => {
            guildLangs.push(GroupLangModel.build({ lang }));
          });
        }

        if (group.langPrimary?.length) {
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

    await sequelize.transaction(async transaction => {
      console.log(`Dropping all tables`);
      await sequelize.query(`DROP TABLE IF EXISTS group_langs`);
      await sequelize.query(`DROP TABLE IF EXISTS challenges`);
      await sequelize.query(`DROP TABLE IF EXISTS guilds`);
      console.log(`Dropped all tables`);

      console.log(`Creating new tables`);
      await sequelize.sync({ force: true });
      console.log(`Created new tables`);

      console.log(`Recreating all groups...`);
      await Promise.all(
        [...guilds].map(async ([, guild], i) => {
          await guild.save({ transaction });
          console.log(`Saved Group ${i + 1}/${guilds.size}`);
        }),
      );
      console.log(`Recreating all groups... done`);

      console.log(`Recreating all challenges...`);
      await Promise.all(
        challenges.map(async (challenge, i) => {
          await challenge.save({ transaction });
          console.log(`Saved Challenge ${i + 1}/${challenges.length}`);
        }),
      );
      console.log(`Recreating all challenges... done`);
    });

    const { rows, count } = await ChallengeModel.findAndCountAll({
      attributes: ['id'],
    });

    console.log(`All challenges count: ${count}`);

    res.json(rows);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
