const { StatusCodes } = require("http-status-codes");

const service = require("../services/pedido.services");

const createPedido = async (req, res) => {
    const result = await service.createPedido(req.body);

    res.status(StatusCodes.CREATED).json(result);
};

const getStatusPedidoById = async (req, res) => {
    const status = await service.getStatusPedidoById(req.params.id);

    res.status(StatusCodes.CREATED).json(status);
};

module.exports = {
    createPedido,
    getStatusPedidoById
}