import Sequelize from 'sequelize';
import { NODE_ENV, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from '@config';
import ChallengeModel from '@/models/challenge.model';
import GroupModel from '@/models/group.model';
import GroupLangModel from '@/models/group-lang.model';

export const sequelize = new Sequelize.Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  dialect: 'mysql',
  host: DB_HOST,
  port: parseInt(DB_PORT),
  timezone: '+09:00',
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    underscored: true,
    freezeTableName: true,
  },
  pool: {
    min: 0,
    max: 5,
  },
  logging: NODE_ENV === 'development',
  benchmark: true,
});

sequelize.authenticate().then(() => {
  console.log('Database connection has been established successfully.');
});

export const GroupLang = GroupLangModel(sequelize);
export const Group = GroupModel(sequelize);
export const Challenge = ChallengeModel(sequelize);
