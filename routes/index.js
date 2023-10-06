// Lesson 01

const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/',lesson1Controller.juliana);

// I can have a lot of routes like the following one:

routes.get('/daniel',lesson1Controller.daniel);

// In order to show the results, just type the port/daniel

// To view everything, you may also use an extension like 
// Thunder Client, instead of just seeing it on the browser :)

routes.use('/contacts', require('./contacts')); 

routes.use('/', require('./swagger'));

module.exports = routes;