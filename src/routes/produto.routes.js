const express = require("express");

const routes = express.Router();

const controller = require("../controllers/produto.controller");

routes.get("/", controller.getProduto);

module.exports = routes;
