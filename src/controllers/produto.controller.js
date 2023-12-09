const { StatusCodes } = require("http-status-codes");

const service = require("../services/produto.services");

const getProduto = async (req, res) => {
    const produtos = await service.getProduto();

    res.status(StatusCodes.OK).json(produtos);
};

module.exports = {
    getProduto
}