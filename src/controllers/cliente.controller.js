const { StatusCodes } = require("http-status-codes");

const service = require("../services/cliente.services");

const loginCliente = async (req, res) => {
  const result = await service.loginCliente(req.body);

  res.status(StatusCodes.OK).json(result);
};

const registerCliente = async (req, res) => {
  const result = await service.registerCliente(req.body);

  res.status(StatusCodes.CREATED).json(result);
};

module.exports = {
  loginCliente,
  registerCliente
};
