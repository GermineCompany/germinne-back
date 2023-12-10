'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pedido', {
      idPedido: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idProduto: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Produto',
          key: 'idProduto'
        }
      },
      idUsuario: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuario',
          key: 'idUsuario'
        }
      },
      idStatus: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'StatusPedido',
          key: 'idStatus'
        }
      },
      quantidade: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pedido');
  }
};