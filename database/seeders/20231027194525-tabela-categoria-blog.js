'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categoriaBlog', [
      {
        categoria: 'Cultivo',
      },
      {
        categoria: 'Plantas',
      },
      {
        categoria: 'Vasos',
      },
      {
        categoria: 'Curiosidades',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categoriaBlog', null, {});
  }
};
