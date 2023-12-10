const { StatusPedido, Pedido } = require("../../database/models");


const createPedido = async (body) => {
    const result = await Pedido.create({ ...body });

    if (result[0] === 0) {
        throw Object({ status: StatusCodes.INTERNAL_SERVER_ERROR, message: "Ocorreu um erro ao finalizar seu pedido..." });
    } else {
        return {
            message: "Pedido criado com sucesso!",
            idPedido: result.dataValues.idPedido
        };
    }
};

const getStatusPedidoById = async (id) => {
    const status = await StatusPedido.findByPk(id);

    return status;
}

module.exports = {
    createPedido,
    getStatusPedidoById
}
