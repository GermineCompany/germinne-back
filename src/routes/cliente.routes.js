const express = require("express");

const routes = express.Router();

const controller = require("../controllers/cliente.controller");

routes.get("/:id", controller.getClienteById);

routes.post("/login", controller.loginCliente);

routes.post("/registro", controller.registerCliente);

routes.put("/:id", controller.updateCliente);

module.exports = routes;
