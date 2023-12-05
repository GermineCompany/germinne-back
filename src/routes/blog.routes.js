const express = require('express');

const routes = express.Router();

const controller = require('../controllers/blog.controllers');

routes.get('/', controller.getPost);

module.exports = routes;

