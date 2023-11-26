'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProfissionalServico', [
      {
        idProfissional: 1,
        idServico: 1
      },
      {
        idProfissional: 1,
        idServico: 2
      },
      {
        idProfissional: 1,
        idServico: 3
      },
      {
        idProfissional: 1,
        idServico: 4
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProfissionalServico', null, {});
  }
};
