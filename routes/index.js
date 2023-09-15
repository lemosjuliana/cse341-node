const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/',lesson1Controller.test04);

// I can have a lot of routes like the following one:

routes.get('/test05',lesson1Controller.test05);

// In order to show the results, just type the port/test05

// To view everything, you may also use an extension like 
// Thunder Client, instead of just seeing it on the browser :)

module.exports = routes;