exports.up = knex => {
  knex.schema.createTable('users', (t) => {
    t.increments('id');
    t.text('firstName');
    t.text('lastName');
    t.text('username').unique().notNullable();
    t.text('email').unique().notNullable();

    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = knex => {
  knex.schema.dropTable('users');
};
