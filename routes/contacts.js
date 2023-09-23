// Lesson 02

const routes = require('express').Router();
const contactsController = require('../controllers/contacts');
 
routes.get('/', contactsController.getAll);

// I can have a lot of routes like the following one:

routes.get('/:id', contactsController.getSingle);

// To view everything, you may also use an extension like 
// Thunder Client, instead of just seeing it on the browser :)

module.exports = routes;