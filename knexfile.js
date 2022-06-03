module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: 'knex',
      user:     'root',
      password: 'root',
      host: 'localhost',
      port: 7070
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/app/database/migrations`
    },
    seeds: {
      tableName: 'knex_seeds',
      directory: `${__dirname}/app/database/seeds`
    }
  }
}
