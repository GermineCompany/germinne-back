'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Endereco', [
      {
        rua: 'Affonso Paulillo',
        bairro: 'Jardim Eliana',
        cidade: 'São Paulo',
        pais: 'Brasil',
        cep: '04851250',
        numero: '14 - C'
      },
      {
        rua: 'Avenida Dona Belmira Marin',
        bairro: 'Jardim Eliana',
        cidade: 'São Paulo',
        pais: 'Brasil',
        cep: '04846000',
        numero: '5001 - Lanchonete'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Endereco', null, {});
  }
};
