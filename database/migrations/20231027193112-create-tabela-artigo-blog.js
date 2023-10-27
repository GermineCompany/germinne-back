'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('artigoBlog', {
      idArtigo: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCategoria: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'categoriaBlog',
          key: 'idCategoria'
        }
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      paragrafos: {
        type: Sequelize.TEXT('long'),
        allowNull: false
      },
      imagens: {
        type: Sequelize.TEXT('long'),
        allowNull: false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('artigoBlog');
  }
};