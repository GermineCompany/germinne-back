'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produto', [
      {
        nome: 'Germinne Box',
        descricao: 'Adquira nossa Germinne Box, nosso kit contem todo o nescessario para proporcionar a você a facilidade de ter o seu próprio jardim verde, saudável e vibrante com alimentos frescos e orgânicos.',
        preco: 59.90,
        estoque: 100
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produto', null, {});
  }
};