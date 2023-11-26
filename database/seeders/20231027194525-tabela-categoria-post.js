'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CategoriaPost', [
      {
        categoria: 'Cultivo',
      },
      {
        categoria: 'Agricultura urbana',
      },
      {
        categoria: 'Curiosidades',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CategoriaPost', null, {});
  }
};
