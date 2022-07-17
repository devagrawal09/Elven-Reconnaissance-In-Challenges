import { Sequelize } from 'sequelize';
import { NODE_ENV, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from '@config';

if (!DB_DATABASE || !DB_PORT || !DB_HOST || !DB_USER || !DB_PASSWORD) {
  throw new Error('Database configuration is missing');
}

export const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  dialect: 'mysql',
  host: DB_HOST,
  port: parseInt(DB_PORT),
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
