'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuario', [
      {
        nome: 'Vitor',
        sobrenome: 'Moutim',
        email: 'moutimg@gmail.com',
        senha: '$2b$05$kHVmsY4e.dj0Trwz69K6hupf8dj1DW9wfznm7Ipuzo8uHkNrEKkYS',
        telefone: '11998181280',
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
