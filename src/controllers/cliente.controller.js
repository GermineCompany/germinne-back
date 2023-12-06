const { StatusCodes } = require("http-status-codes");

const service = require("../services/cliente.services");

const loginCliente = async (req, res) => {
  const posts = await service.loginCliente(req.body);

  res.status(StatusCodes.NOT_FOUND).json(posts);
};

module.exports = {
  loginCliente,
};
