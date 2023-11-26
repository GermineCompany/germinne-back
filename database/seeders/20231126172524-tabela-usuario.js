'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuario', [
      {
        nome: 'Vitor',
        sobrenome: 'Moutim',
        email: 'moutimg@gmail.com',
        senha: 'germinne',
        cpf: '51225511895',
        dataDeNascimento: '2001-05-22',
        idEndereco: 1
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuario', null, {});
  }
};
