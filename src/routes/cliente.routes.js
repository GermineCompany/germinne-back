const express = require("express");

const routes = express.Router();

const controller = require("../controllers/cliente.controller");

routes.post("/login", controller.loginCliente);

module.exports = routes;
