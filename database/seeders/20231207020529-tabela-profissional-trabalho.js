'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProfissionalTrabalho', [
      {
        idProfissional: 1,
        idTrabalho: 1
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProfissionalTrabalho', null, {});
  }
};