'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pedido', [
      {
        idProduto: 1,
        idUsuario: 1,
        idStatus: 3,
        quantidade: 1,
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pedido', null, {});
  }
};
