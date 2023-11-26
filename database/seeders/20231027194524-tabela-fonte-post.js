'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('FontePost', [
      {
        fonte: 'BeGreen.com',
      },
      {
        fonte: 'Globo.com',
      },
      {
        fonte: 'Growth.com',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('FontePost', null, {});
  }
};
