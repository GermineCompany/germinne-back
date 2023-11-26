'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ServicosOferecidos', [
      {
        servico: 'Fertilização do solo',
      },
      {
        servico: 'Manutenção',
      },
      {
        servico: 'Plantio',
      },
      {
        servico: 'Sistema de irrigação',
      },
      {
        servico: 'Controle de pragas',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ServicosOferecidos', null, {});
  }
};
