import { Sequelize } from 'sequelize';
import config from 'config';

const dbConfig = config.get('dbConfig');

const db: Sequelize = new Sequelize(dbConfig.dbName, dbConfig.username, dbConfig.pass, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  port: dbConfig.port
});

export default db;
