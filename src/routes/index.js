const express = require("express");

const routes = express.Router();

routes.use("/blog", require("./blog.routes"));

routes.use("/cliente", require("./cliente.routes"));

routes.use("/profissional", require("./profissional.routes"));

routes.use("/produto", require("./produto.routes"));

module.exports = routes;
