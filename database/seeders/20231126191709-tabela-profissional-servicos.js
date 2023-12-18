"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ProfissionalServico",
      [
        {
          idProfissional: 1,
          idServico: 1,
        },
        {
          idProfissional: 1,
          idServico: 3,
        },
        {
          idProfissional: 1,
          idServico: 4,
        },
        {
          idProfissional: 2,
          idServico: 1,
        },
        {
          idProfissional: 2,
          idServico: 2,
        },
        {
          idProfissional: 2,
          idServico: 5,
        },
        {
          idProfissional: 3,
          idServico: 5,
        },
        {
          idProfissional: 3,
          idServico: 2,
        },
        {
          idProfissional: 4,
          idServico: 1,
        },
        {
          idProfissional: 4,
          idServico: 2,
        },
        {
          idProfissional: 5,
          idServico: 3,
        },
        {
          idProfissional: 5,
          idServico: 2,
        },
        {
          idProfissional: 6,
          idServico: 5,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ProfissionalServico", null, {});
  },
};
