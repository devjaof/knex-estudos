const express = require('express');
const routes = express.Router();
const usersController = require('./app/controllers/usersController')

routes.get('/users', usersController.getUsers);
routes.post('/users', usersController.postUser);
routes.put('/users/:id', usersController.updateUser);
routes.delete('/users/:id', usersController.deleteUser);

module.exports = routes;