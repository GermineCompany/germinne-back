"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ProfissionalTrabalho",
      [
        {
          idProfissional: 1,
          idTrabalho: 1,
        },
        {
          idProfissional: 1,
          idTrabalho: 2,
        },
        {
          idProfissional: 1,
          idTrabalho: 3,
        },
        {
          idProfissional: 2,
          idTrabalho: 6,
        },
        {
          idProfissional: 2,
          idTrabalho: 4,
        },
        {
          idProfissional: 2,
          idTrabalho: 2,
        },
        {
          idProfissional: 3,
          idTrabalho: 5,
        },
        {
          idProfissional: 3,
          idTrabalho: 1,
        },
        {
          idProfissional: 3,
          idTrabalho: 4,
        },
        {
          idProfissional: 4,
          idTrabalho: 1,
        },
        {
          idProfissional: 4,
          idTrabalho: 6,
        },
        {
          idProfissional: 4,
          idTrabalho: 3,
        },
        {
          idProfissional: 5,
          idTrabalho: 3,
        },
        {
          idProfissional: 5,
          idTrabalho: 2,
        },
        {
          idProfissional: 5,
          idTrabalho: 5,
        },
        {
          idProfissional: 6,
          idTrabalho: 4,
        },
        {
          idProfissional: 6,
          idTrabalho: 6,
        },
        {
          idProfissional: 6,
          idTrabalho: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ProfissionalTrabalho", null, {});
  },
};
