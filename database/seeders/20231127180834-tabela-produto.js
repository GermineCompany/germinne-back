'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produto', [
      {
        nome: 'Germinne Box',
        descricao: 'Adquira nossa Germinne Box, nosso kit contem todo o nescessario para proporcionar a você a facilidade de ter o seu próprio jardim verde, saudável e vibrante com alimentos frescos e orgânicos.',
        preco: 134.99,
        estoque: 100,
        imagem: 'https://germinnecomp-img.s3.sa-east-1.amazonaws.com/germinne-box-1.png'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produto', null, {});
  }
};
