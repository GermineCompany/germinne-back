"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Endereco",
      [
        {
          rua: "Affonso Paulillo",
          bairro: "Jardim Eliana",
          cidade: "São Paulo",
          pais: "Brasil",
          cep: "04851250",
          numero: "14 - Assembléia de Deus",
        },
        {
          rua: "Avenida Dona Belmira Marin",
          bairro: "Jardim Eliana",
          cidade: "São Paulo",
          pais: "Brasil",
          cep: "04846000",
          numero: "5001 - Lanchonete",
        },
        {
          rua: "Avenida dos Ourives",
          bairro: "Jardim Saveiro",
          cidade: "São Paulo",
          pais: "Brasil",
          cep: "04547000",
          numero: "42 - Condominio dos Jardins",
        },
        {
          rua: "Rua piratininga",
          bairro: "Serraria",
          cidade: "São Paulo",
          pais: "Brasil",
          cep: "09990020",
          numero: "266 - Restaurante Pombal",
        },
        {
          rua: "Rua da Paz",
          bairro: "Centro",
          cidade: "São Paulo",
          pais: "Brasil",
          cep: "01001000",
          numero: "123",
        },
        {
          rua: "Avenida Paulista",
          bairro: "Bela Vista",
          cidade: "São Paulo",
          pais: "Brasil",
          cep: "01310200",
          numero: "456 - Escritório",
        },
        {
          rua: "Rua Augusta",
          bairro: "Consolação",
          cidade: "São Paulo",
          pais: "Brasil",
          cep: "01305000",
          numero: "789 - Apartamento 10",
        },
        {
          rua: "Alameda Santos",
          bairro: "Jardins",
          cidade: "São Paulo",
          pais: "Brasil",
          cep: "01419000",
          numero: "1010 - Cobertura",
        },
        {
          rua: "Rua Oscar Freire",
          bairro: "Cerqueira César",
          cidade: "São Paulo",
          pais: "Brasil",
          cep: "01426001",
          numero: "234 - Loja de Roupas",
        },
        {
          rua: "Avenida Faria Lima",
          bairro: "Itaim Bibi",
          cidade: "São Paulo",
          pais: "Brasil",
          cep: "04535005",
          numero: "567 - Agência Bancária",
        },
        {
          rua: "Rua da Consolação",
          bairro: "Consolação",
          cidade: "São Paulo",
          pais: "Brasil",
          cep: "01301902",
          numero: "890 - Livraria Cultura",
        },
        {
          rua: "Alameda Campinas",
          bairro: "Jardim Paulista",
          cidade: "São Paulo",
          pais: "Brasil",
          cep: "01404000",
          numero: "1111 - Clínica Médica",
        },
        {
          rua: "Rua Bela Cintra",
          bairro: "Cerqueira César",
          cidade: "São Paulo",
          pais: "Brasil",
          cep: "01415001",
          numero: "1212 - Restaurante Gourmet",
        },
        {
          rua: "Avenida Engenheiro Luís Carlos Berrini",
          bairro: "Brooklin",
          cidade: "São Paulo",
          pais: "Brasil",
          cep: "04571000",
          numero: "1313 - Empresa de Tecnologia",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Endereco", null, {});
  },
};
