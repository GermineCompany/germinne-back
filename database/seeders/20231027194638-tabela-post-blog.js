'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PostBlog', [
      {
        idCategoria: 3,
        idFonte: 1,
        titulo: 'O Telhado Verde do Shopping Eldorado: Um Refúgio Natural',
        descricao: 'Este artigo revela como o Shopping Eldorado se transforma em um refúgio verde e relaxante no meio da cidade, proporcionando uma experiência única para quem busca tranquilidade em São Paulo.',
        conteudo: JSON.stringify(['O conceito de "telhado verde" ganhou destaque nas últimas décadas como uma solução inteligente para tornar ambientes urbanos mais sustentáveis ​​e amigáveis ​​ao meio ambiente. O Shopping Eldorado, localizado em São Paulo, é um excelente exemplo de como a integração de espaços verdes em áreas urbanas pode ser bem sucedida. Neste artigo, exploraremos o maravilhoso telhado verde do Shopping Eldorado, um verdadeiro oásis urbano para os amantes da natureza.', 'Contato com a Natureza: O espaço verde no telhado do Shopping Eldorado oferece uma oportunidade rara para que os habitantes da cidade de São Paulo se conectem com a natureza. Os jardins exuberantes, as plantas, as árvores e as flores proporcionam um ambiente natural que permite aos visitantes relaxar e se reconectar com o mundo natural.', 'Espaços de Lazer: Além das áreas verdes, o telhado do Shopping Eldorado também possui espaços de lazer, como bancos e áreas para sentar. Isso permite que os visitantes descansem, leiam um livro, façam um almoço ou simplesmente relaxem enquanto apreciam a beleza do local. E como combo também tem vistas espetaculares da cidade. Os visitantes contemplam a paisagem urbana de São Paulo, incluindo prédios icônicos e horizontes fascinantes, criando uma experiência única de contemplação.', 'Atividades Relaxantes: O Shopping Eldorado muitas vezes organiza eventos e atividades no telhado verde, como ioga ao ar livre, sessões de meditação e aulas de jardinagem. Essas atividades proporcionaram uma experiência relaxante e enriquecedora para os visitantes.', 'Em resumo, o telhado verde do Shopping Eldorado é um oásis de tranquilidade e relaxamento no coração da cidade. É um lugar onde os visitantes podem escapar do estresse da vida urbana, respirar puro e desfrutar da beleza da natureza, tornando-o um destino imperdível para todos que buscam um refúgio verde e relaxante em São Paulo.']),
        imagens: JSON.stringify(['https://media.gazetadopovo.com.br/haus/2016/03/mall-eldorado-4-2d577b80.jpg', 'https://ciclovivo.com.br/wp-content/uploads/2022/01/ecotelhado-shopping-eldorado-5-1024x642.jpg'])
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PostBlog', null, {});
  }
};
