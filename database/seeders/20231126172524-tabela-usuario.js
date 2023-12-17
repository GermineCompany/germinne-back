"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Usuario",
      [
        {
          nome: "Vitor",
          sobrenome: "Moutim",
          email: "moutimg@gmail.com",
          senha: "$2b$05$kHVmsY4e.dj0Trwz69K6hupf8dj1DW9wfznm7Ipuzo8uHkNrEKkYS",
          cpf: "51225511895",
          dataDeNascimento: "2001-05-22",
          idEndereco: 1,
        },
        {
          nome: "Kaique",
          sobrenome: "Teruel",
          email: "Kteruel@gmail.com",
          senha: "$2b$05$kHVmsY4e.dj0Trwz69K6hupf8dj1DW9wfznm7Ipuzo8uHkNrEKkYS",
          cpf: " 20225721958",
          dataDeNascimento: "2004-10-10",
          idEndereco: 3,
        },
        {
          nome: "Laura",
          sobrenome: "Buzato",
          email: "buzato@gmail.com",
          senha: "$2b$05$kHVmsY4e.dj0Trwz69K6hupf8dj1DW9wfznm7Ipuzo8uHkNrEKkYS",
          cpf: "18465803789",
          dataDeNascimento: "2001-05-16",
          idEndereco: 2,
        },
        {
          nome: "Ronaldo",
          sobrenome: "Welingtom",
          email: "Weilingtoma@gmail.com",
          senha: "$2b$05$kHVmsY4e.dj0Trwz69K6hupf8dj1DW9wfznm7Ipuzo8uHkNrEKkYS",
          cpf: "51962384780",
          dataDeNascimento: "1990-04-20",
          idEndereco: 4,
        },
        {
          nome: "Yara",
          sobrenome: "Eustaquio",
          email: "eustaquio@gmail.com",
          senha: "$2b$05$kHVmsY4e.dj0Trwz69K6hupf8dj1DW9wfznm7Ipuzo8uHkNrEKkYS",
          cpf: "48666782450",
          dataDeNascimento: "2003-11-10",
          idEndereco: 5,
        },
        {
          nome: "Arthur",
          sobrenome: "Souza",
          email: "Souza@gmail.com",
          senha: "$2b$05$kHVmsY4e.dj0Trwz69K6hupf8dj1DW9wfznm7Ipuzo8uHkNrEKkYS",
          cpf: "93281227830",
          dataDeNascimento: "1980-01-2",
          idEndereco: 6,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Usuario", null, {});
  },
};
