import { Sequelize } from 'sequelize';

const db = new Sequelize('films_db', 'test', '', {
  host: 'localhost',
  user: 'test',
  password: 'test2281337',
  dialect: 'mysql',
});

export default db;
