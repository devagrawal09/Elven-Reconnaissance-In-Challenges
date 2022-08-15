import { Router } from 'express';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import axios from 'axios';
import { GroupId, GroupModel } from '@/models/group.model';
import { ChallengeId, ChallengeModel } from '@/models/challenge.model';
import { GroupLangModel } from '@/models/group-lang.model';
import { sequelize } from '@/databases';
import { IChallengeDto, SearchConfig, SearchParams } from '@/dtos';
import { SearchParamsToSequelizeQuery } from '@/search';
import * as langs from '@/languages';
import { LogModel } from '@/models/log.model';

type Lang = keyof typeof langs;

export const router = Router();

router.get(`/`, async (req, res, next) => {
  try {
    const query = plainToClass(SearchParams, req.query);

    const selectedLang = (req.query.lang as Lang) || 'en';

    const log = await LogModel.findOne();
    const lastUpdated = log?.get().lastUpdated;

    res.render('index', {
      title: 'Express',
      query,
      lastUpdated,
      config: SearchConfig,

      langs: Object.keys(langs),
      selectedLangPack: langs[selectedLang],
    });
  } catch (error) {
    next(error);
  }
});

router.get(`/data`, async (req, res, next) => {
  try {
    const options = JSON.parse(req.query.options as string);
    const query = plainToClass(SearchParams, { ...req.query, ...options });
    const validationErrors = await validate(query);

    if (validationErrors.length > 0) {
      validationErrors.forEach(
        error =>
          error.constraints &&
          Object.values(error.constraints).forEach(e => console.error(`\t${e}`)),
      );
      throw new Error('Validation error');
    }

    const where = SearchParamsToSequelizeQuery(query);

    const [cs, recordsFiltered, recordsTotal] = await Promise.all([
      ChallengeModel.findAll({
        where,
        include: [{ association: 'group', include: [`langs`] }],
        limit: query.length,
        offset: query.start,
        order: query.order.map(([key, order]) => {
          if (key === `group.name`) {
            return [`group`, `name`, order];
          }
          if (key === `group.langs`) {
            return [`group`, `langs`, `lang`, order];
          }
          return [key, order];
        }),
      }),
      ChallengeModel.count({ where }),
      ChallengeModel.count({}),
    ]);

    const data = cs.map(c => c.get());

    res.json({ draw: query.draw, data, recordsFiltered, recordsTotal });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get(`/sync`, async (req, res, next) => {
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
      const groupId = group.id as GroupId;
      let guild = guilds.get(group.id);
      if (!guild) {
        guild = GroupModel.build({
          id: groupId,
          name: group.name,
          langAll: group.langAll,
          classification: group.classification,
          subclassification: group.subclassification,
          memberColor: group.memberColor,
        });

        const guildLangs: GroupLangModel[] = [];

        if (!group.langAll) {
          if (group.langPrimary?.length) {
            group.langPrimary.forEach(lang => {
              guildLangs.push(GroupLangModel.build({ lang, groupId, primary: true }));
            });
          }

          if (group.lang?.length) {
            group.lang.forEach(lang => {
              if (!group.langPrimary?.includes(lang)) {
                guildLangs.push(GroupLangModel.build({ lang, groupId, primary: false }));
              }
            });
          }

          guild.setDataValue('langs', guildLangs);
        }

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

          const langs = guild.getDataValue('langs');

          await Promise.all(
            langs?.map(async (lang, j) => {
              await lang.save({ transaction });

              console.log(
                `Saved Group Lang ${j + 1}/${langs.length} for Group ${i + 1}/${guilds.size}`,
              );
            }) ?? [],
          );
        }),
      );
      console.log(`Recreating all groups... done`);

      console.log(`Recreating all challenges...`);
      await Promise.all(
        challenges.map(async (challenge, t) => {
          await challenge.save({ transaction });
          console.log(`Saved Challenge ${t + 1}/${challenges.length}`);
        }),
      );
      console.log(`Recreating all challenges... done`);

      console.log(`Setting last updated`);
      let log = await LogModel.findOne();

      if (!log) {
        log = LogModel.build({ lastUpdated: new Date() });
      }

      log?.setDataValue(`lastUpdated`, new Date(ericData.lastupdated));
      await log?.save({ transaction });
      console.log(`Setting last updated... done`);
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
