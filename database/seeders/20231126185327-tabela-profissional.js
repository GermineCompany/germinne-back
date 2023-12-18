"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Profissional",
      [
        {
          nome: "Arthur",
          sobrenome: "Souza",
          email: "Souza@gmail.com",
          senha: "$2b$05$TcaSo73M2PmZenHpAgSIi.XptJ.Jn0hyy.wRtOBKZoQxuvHVqhMM.",
          cpf: "93281227830",
          dataDeNascimento: "1980-01-2",
          rg: "397509984",
          biografia:
            "Trabalho com plantas faz 7 anos, e por ser Pai de plantas, vejo como o ambiente melhora! Estou disposto a melhorar ambiente de muitas pessoas nessa jornada de plantar e colher! Estou Disponível para ajudá-lo no que precisar ",
          telefone: "011998181280",
          celular: "01159330694",
          imagemPerfil:
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/arthur-souza.webp",
          //imagemPortfolio: JSON.stringify(["", ""]),
          idEndereco: 6,
        },
        {
          nome: "Emanuel",
          sobrenome: "Silva",
          email: "emanuelsilva@gmail.com",
          senha: "$2b$05$TcaSo73M2PmZenHpAgSIi.XptJ.Jn0hyy.wRtOBKZoQxuvHVqhMM.",
          cpf: "75342186950",
          dataDeNascimento: "1968-10-2",
          rg: "15948362720",
          biografia:
            "Tenho 55 anos e sou formado em agronomia. Vim de uma família de agricultores e trabalho na área há 23 anos. Sou especialista em doenças e pragas.",
          telefone: "011998181280",
          celular: "01159330694",
          imagemPerfil:
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/emanuel-silva.jpg",
          //imagemPortfolio: JSON.stringify(["", ""]),
          idEndereco: 7,
        },
        {
          nome: "Jose",
          sobrenome: "Arnaldo",
          email: "arnaldo@gmail.com",
          senha: "$2b$05$TcaSo73M2PmZenHpAgSIi.XptJ.Jn0hyy.wRtOBKZoQxuvHVqhMM.",
          cpf: "51318092078",
          dataDeNascimento: "1960-8-1",
          rg: "174775118",
          biografia: "Me chamo José da Silva, tenho 55 anos e sou um horticultor com uma trajetória marcante no universo agrícola. A paixão pela terra e pelas plantas corre em minhas veias desde cedo, proveniente de uma família com profundas raízes na agricultura.",
          telefone: "011991598280",
          celular: "01159315924",
          imagemPerfil:
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/jose-arnaldo.webp",
          //imagemPortfolio: JSON.stringify(["", ""]),
          idEndereco: 8,
        },
        {
          nome: "Lidia",
          sobrenome: "Mioto",
          email: "mioto@gmail.com",
          senha: "$2b$05$TcaSo73M2PmZenHpAgSIi.XptJ.Jn0hyy.wRtOBKZoQxuvHVqhMM.",
          cpf: "51318123978",
          dataDeNascimento: "1992-8-1",
          rg: "171598018",
          biografia:
            "Sou do interior do Espírito Santo e moro em São Paulo há 5 anos. Trabalho com a agricultura nas horas vagas, aplicando todo o conhecimento que meu pai me passou, trabalhando com ele por 4 anos. Estou disponível para ajudá-lo no que for possível!",
          telefone: "011991428650",
          celular: "01159735924",
          imagemPerfil:
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/lidia-mioto.webp",
          //imagemPortfolio: JSON.stringify(["", ""]),
          idEndereco: 9,
        },
        {
          nome: "Maria",
          sobrenome: "Antonia",
          email: "antonia@gmail.com",
          senha: "$2b$05$TcaSo73M2PmZenHpAgSIi.XptJ.Jn0hyy.wRtOBKZoQxuvHVqhMM.",
          cpf: "87978945610",
          dataDeNascimento: "1980-8-1",
          rg: "174519847",
          biografia:
            "Sou do interior do Espírito Santo e moro em São Paulo há 5 anos. Trabalho com a agricultura nas horas vagas, aplicando todo o conhecimento que meu pai me passou, trabalhando com ele por 4 anos. Estou disponível para ajudá-lo no que for possível!",
          telefone: "011991592486",
          celular: "01115872924",
          imagemPerfil:
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/Maria-antonia.webp",
          //imagemPortfolio: JSON.stringify(["", ""]),
          idEndereco: 10,
        },
        {
          nome: "Soraia",
          sobrenome: "Lima",
          email: "soraia@gmail.com",
          senha: "$2b$05$TcaSo73M2PmZenHpAgSIi.XptJ.Jn0hyy.wRtOBKZoQxuvHVqhMM.",
          cpf: "51318092078",
          dataDeNascimento: "1960-8-1",
          rg: "174775118",
          biografia: "Soraia, nascida em uma pequena comunidade rural há 55 anos, é uma renomada horticultora cujo nome se tornou sinônimo de expertise na área. Desde cedo, Soraia foi imersa no universo agrícola, vindo de uma família de agricultores cujas raízes se entrelaçam com a terra.",
          telefone: "011991598280",
          celular: "01159315924",
          imagemPerfil:
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/soraia-lima.webp",
          //imagemPortfolio: JSON.stringify(["", ""]),
          idEndereco: 11,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Profissional", null, {});
  },
};
