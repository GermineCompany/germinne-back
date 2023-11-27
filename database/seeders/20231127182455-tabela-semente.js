'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Semente', [
      {
        semente: 'Coentro',
      },
      {
        semente: 'Manjericão',
      },
      {
        semente: 'Salsa',
      },
      {
        semente: 'Hortelã',
      },
      {
        semente: 'Tomate cereja',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Semente', null, {});
  }
};
