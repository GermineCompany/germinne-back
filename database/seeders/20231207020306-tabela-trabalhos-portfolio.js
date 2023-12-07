'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TrabalhosPortfolio', [
      {
        titulo: 'Hortas em centros comunitários',
        descricao: 'Bustando incentivar as ações de horticultúra para as crianças, iremos cultivar hortas em centros comunitários e lares de idosos, onde serão colocadas em áreas abartes , possibilitando o contato das crianças com as hortas, e trazendo atividades que vão ajudar a saúde dos idosos.',
        local: 'São Paulo - SP | Av. Paulista',
        data: '2023-08-01',
        fotosTrabalho: JSON.stringify(['https://s2.glbimg.com/3ll5F5xzQ_Q8kJo_7sSgRgyYGis=/620x413/smart/e.glbimg.com/og/ed/f/original/2022/05/20/horta-de-manguinhos-rio-de-janeiro.jpeg', 'https://content.news.ifood.com.br/uploads/2022/06/IFN_049_BN_01-1.jpg'])
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TrabalhosPortfolio', null, {});
  }
};
