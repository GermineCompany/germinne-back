'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Profissional', [
      {
        nome: 'Vitor',
        sobrenome: 'Moutim',
        email: 'moutimg@gmail.com',
        senha: '$2b$05$TcaSo73M2PmZenHpAgSIi.XptJ.Jn0hyy.wRtOBKZoQxuvHVqhMM.',
        cpf: '51225511895',
        dataDeNascimento: '2001-05-22',
        rg: '53182455x',
        biografia: 'Trabalho com plantas faz 7 anos, e por ser Pai de plantas, vejo como o ambiente melhora! Estou disposto a melhorar ambiente de muitas pessoas nessa jornada de plantar e colher! Estou Disponível para ajudá-lo no que precisar',
        telefone: '011998181280',
        celular: '01159330694',
        imagemPerfil: 'https://img.freepik.com/fotos-premium/milho-jovem-agricultora-sorrindo-e-colhendo-milho-uma-linda-mulher-no-fundo-do-campo-segura-as-espigas-de-milho-agricultura-e-horticultura_361821-2211.jpg',
        imagemPortfolio: JSON.stringify(['https://s2.glbimg.com/3ll5F5xzQ_Q8kJo_7sSgRgyYGis=/620x413/smart/e.glbimg.com/og/ed/f/original/2022/05/20/horta-de-manguinhos-rio-de-janeiro.jpeg', 'https://content.news.ifood.com.br/uploads/2022/06/IFN_049_BN_01-1.jpg']),
        idEndereco: 2
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Profissional', null, {});
  }
};
