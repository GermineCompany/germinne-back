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

const getClienteById = async (req, res) => {
  const infos = await service.getClienteById(req.params.id);

  res.status(StatusCodes.CREATED).json(infos);
};

const updateCliente = async (req, res) => {
  const result = await service.updateCliente(req.body, req.params.id);

  res.status(StatusCodes.OK).json(result);
}

module.exports = {
  loginCliente,
  registerCliente,
  getClienteById,
  updateCliente
};
