const knex = require("../database/");

module.exports = {
  async getUsers(req, res) {
    const r = await knex("users");

    return res.json(r);
  },
  async postUser(req, res, next) {
    try {
      const { firstName, lastName, username, email } = req.body;
      await knex("users").insert({
        firstName,
        lastName,
        username,
        email,
      });
      return res.status(201).send("cadastrou o bicho");
    } catch (error) {
      next(error);
    }
  },
  async updateUser(req, res, next) {
    try {
      const { firstName, lastName, username, email } = req.body;
      const { id } = req.params;
      await knex("users")
        .update({
          firstName,
          lastName,
          username,
          email,
        })
        .where({ id });

      return res.send("user atualizado");
    } catch (error) {
      next(error);
    }
  },
  async deleteUser(req, res, next) {
      try {
          const { id } = req.params;
          await knex("users")
          .where({ id })
          .del()

          return res.send("user deletado")
      } catch (error) {
          next(error);   
      }
  },
};
