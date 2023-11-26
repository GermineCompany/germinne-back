'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PostBlog', {
      idPost: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCategoria: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'CategoriaPost',
          key: 'idCategoria'
        }
      },
      idFonte: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'FontePost',
          key: 'idFonte'
        }
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      conteudo: {
        type: Sequelize.TEXT('long'),
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      imagens: {
        type: Sequelize.TEXT('long'),
        allowNull: false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PostBlog');
  }
};