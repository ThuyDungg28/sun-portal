var knex = require('knex')({
  client: 'mysql',
  connection: {
    database: process.env.DB_DATABASE, // make sure you have this db created in your mysql server
    user: process.env.DB_USERNAME, // can be explicitly specified to be something else
    password: process.env.DB_PASSWORD, // your corresponding password
    host: process.env.DB_HOST,
    port: process.env.DB_PORT // Default port unless you've configured your sql server otherwise
  },
  migrations: {
    tableName: '20190510071637_create_table_user.js'
  }
});
