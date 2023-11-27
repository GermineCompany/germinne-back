'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StatusPedido', {
      idStatus: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StatusPedido');
  }
};