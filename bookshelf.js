var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : process.env.DB_HOST,
    user     : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE,
    charset  : process.env.DB_CHARSET
  }
});

var bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');

export default bookshelf;
