/* eslint-disable import/extensions */
import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Film = db.define(
  'films',
  {
    title: {
      type: DataTypes.STRING,
    },
    rate: {
      type: DataTypes.DOUBLE,
    },
    description: {
      type: DataTypes.STRING,
    },
    genre: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    thumbnailUrl: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  },
);

export default Film;
