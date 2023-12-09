'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Profissional', {
      idProfissional: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dataDeNascimento: {
        type: Sequelize.DATE
      },
      rg: {
        type: Sequelize.STRING
      },
      biografia: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      celular: {
        type: Sequelize.STRING
      },
      imagemPerfil: {
        type: Sequelize.STRING
      },
      imagemPortfolio: {
        type: Sequelize.TEXT('long')
      },
      idEndereco: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Endereco',
          key: 'idEndereco'
        }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Profissional');
  }
};