"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Pedido",
      [
        {
          idProduto: 1,
          idUsuario: 1,
          idStatus: 3,
          quantidade: 1,
        },
        {
          idProduto: 1,
          idUsuario: 5,
          idStatus: 4,
          quantidade: 2,
        },
        {
          idProduto: 1,
          idUsuario: 2,
          idStatus: 4,
          quantidade: 3,
        },
        {
          idProduto: 1,
          idUsuario: 3,
          idStatus: 2,
          quantidade: 1,
        },
        {
          idProduto: 1,
          idUsuario: 4,
          idStatus: 3,
          quantidade: 1,
        },
        {
          idProduto: 1,
          idUsuario: 5,
          idStatus: 2,
          quantidade: 2,
        },
        {
          idProduto: 1,
          idUsuario: 6,
          idStatus: 5,
          quantidade: 1,
        },
        {
          idProduto: 1,
          idUsuario: 2,
          idStatus: 5,
          quantidade: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Pedido", null, {});
  },
};
