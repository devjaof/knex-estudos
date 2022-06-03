exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {firstName: 'Jonas', lastName: 'Mão', username: 'xXjonasXx', email: 'jojo@nas.com'},
    {firstName: 'Jacinto', lastName: 'Pinto', username: 'overlord', email: 'jaci@nto.com'},
    {firstName: 'Amanda', lastName: 'Rolas', username: 'amanda000', email: 'rol@nas.com'},
  ]);
};
