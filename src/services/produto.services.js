const { Produto, Semente } = require("../../database/models");

const getProduto = async () => {
    const produto = await Produto.findAll({
        include: {
            model: Semente, as: 'produtoSemente'
        }
    });

    return produto;
}

module.exports = {
    getProduto
}