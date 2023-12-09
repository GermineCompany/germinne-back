const express = require("express");

const routes = express.Router();

const controller = require("../controllers/cliente.controller");

routes.post("/login", controller.loginCliente);

routes.post("/registro", controller.registerCliente);

module.exports = routes;
