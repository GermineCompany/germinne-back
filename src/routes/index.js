const express = require('express');

const routes = express.Router();

routes.use('/blog', require('./blog.routes'));

module.exports = routes;