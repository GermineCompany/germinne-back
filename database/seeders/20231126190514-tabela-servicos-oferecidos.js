"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ServicosOferecidos",
      [
        {
          servico: "Fertilização do solo", //1
        },
        {
          servico: "Manutenção", //2
        },
        {
          servico: "Plantio", //3
        },
        {
          servico: "Sistema de irrigação", //4
        },
        {
          servico: "Controle de pragas", //5
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ServicosOferecidos", null, {});
  },
};
