module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'knex',
      user:     'root',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

}
