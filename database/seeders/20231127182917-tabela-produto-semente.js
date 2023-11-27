'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProdutoSemente', [
      {
        idProduto: 1,
        idSemente: 1
      },
      {
        idProduto: 1,
        idSemente: 2
      },
      {
        idProduto: 1,
        idSemente: 3
      },
      {
        idProduto: 1,
        idSemente: 4
      },
      {
        idProduto: 1,
        idSemente: 5
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProdutoSemente', null, {});
  }
};
