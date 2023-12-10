const express = require("express");

const routes = express.Router();

const controller = require("../controllers/profissional.controllers");

routes.post("/registro", controller.registerProfissional);

routes.post("/login", controller.loginProfissional);

routes.get("/", controller.getProfissional);

routes.get("/:id", controller.getProfissionalById);

routes.put("/:id", controller.updateProfissional);

module.exports = routes;
