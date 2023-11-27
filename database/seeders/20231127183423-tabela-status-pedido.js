'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('StatusPedido', [
      {
        status: 'Processando pagamento',
      },
      {
        status: 'Pagamento concluido',
      },
      {
        status: 'Em separação',
      },
      {
        status: 'Em rota'
      },
      {
        status: 'Entregue'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('StatusPedido', null, {});
  }
};
