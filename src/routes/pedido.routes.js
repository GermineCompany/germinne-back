const express = require("express");

const routes = express.Router();

const controller = require("../controllers/pedido.controllers");

routes.get("/status/:id", controller.getStatusPedidoById);

routes.post("/", controller.createPedido);

module.exports = routes;
