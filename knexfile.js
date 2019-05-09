/* eslint-disable no-unused-vars */
const dotenv = require('dotenv').config();
const utils = require('./utils');

module.exports = {
  development: {
    client: 'mysql',
    host: 'mysql',
    connection: {
      host : 'mysql',
      user : 'admin',
      password : 'Aa@123456',
      database : 'myportal'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
};
