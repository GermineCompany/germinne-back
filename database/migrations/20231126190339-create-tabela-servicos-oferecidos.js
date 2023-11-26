'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ServicosOferecidos', {
      idServico: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      servico: {
        type: Sequelize.STRING,
        allowNull: false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ServicosOferecidos');
  }
};