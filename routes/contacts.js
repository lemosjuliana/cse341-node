// Lesson 02


const routes = require('express').Router();
const contactsController = require('../controllers/contacts');
 
routes.get('/', contactsController.getAll);

// I can have a lot of routes like the following one:

routes.get('/:id', contactsController.getSingle);

// To view everything, you may also use an extension like 
// Thunder Client, instead of just seeing it on the browser :)

// Create a POST route for creating new contacts that 
// returns the ID of the new contact and a 201 status:
routes.post('/', contactsController.createContact);

// Create a PUT route for updating a contact that 
// returns a 204 status
routes.put('/:id', contactsController.updateContact);

// Create a DELETE route for deleting a contact that
// returns a 200 status
routes.delete('/:id', contactsController.deleteContact);

module.exports = routes;