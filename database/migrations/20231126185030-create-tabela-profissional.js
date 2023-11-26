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
        type: Sequelize.DATE,
        allowNull: false
      },
      rg: {
        type: Sequelize.STRING,
        allowNull: false
      },
      biografia: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      celular: {
        type: Sequelize.STRING,
        allowNull: false
      },
      imagemPerfil: {
        type: Sequelize.STRING,
        allowNull: false
      },
      imagemPortfolio: {
        type: Sequelize.TEXT('long'),
        allowNull: false
      },
      idEndereco: {
        allowNull: false,
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