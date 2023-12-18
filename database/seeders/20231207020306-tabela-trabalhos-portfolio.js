"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "TrabalhosPortfolio",
      [
        {
          titulo:
            "Transformando espaços livres em horta: desafios e conquistas",
          descricao:
            "Na área com espaços livres, fiz uma horta! Foi um desafio, mas consegui. Mexi na terra, coloquei adubo pra melhorar o solo. É importante não deixar a água acumular, então fiz canteiro elevado para as hortaliças não ficarem encharcadas. Escolhi plantas que gostam desse tipo de solo. Com apoio, alguns ajudou a preparar a terra. Foi um trabalhão, mas valeu a pena porque agora temos uma horta com vegetais frescos.",
          local: "São Paulo - SP | Av. Paulista",
          data: "2023-08-01",
          fotosTrabalho: JSON.stringify([
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/emanuel-port-img-1.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/emanuel-port-img-2.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/emanuel-port-img-3.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/emanuel-port-img-4.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/emanuel-port-img-5.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/emanuel-port-img-6.jpg",
            /*Colocar as 6 imagens do trabalho aqui*/
          ]),
        },
        {
          titulo: "Hortas em quaisquer espaço",
          descricao:
            "É possível fazer uma horta em qualquer lugar! Eu comecei em espaços pequenos. Escolhi um local ensolarado, com terra boa e plantei as sementes. Foi legal ver as hortas crescerem! Todo dia eu regava, tirava as hortaliças ruins e procurei cuidar da melhor forma. Foi muito bom cuidar do jeito certo e ver uma horta dar resultado.",
          local: "São Paulo - SP | Av. dos Ourives",
          data: "2022-06-01",
          fotosTrabalho: JSON.stringify([
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/arthur-port-img-1.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/arthur-port-img-2.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/arthur-port-img-3.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/arthur-port-img-4.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/arthur-port-img-5.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/arthur-port-img-6.jpg",
            /*Colocar as 6 imagens do trabalho aqui*/
          ]),
        },
        {
          titulo: "Proporcionando verde em seu quintal",
          descricao:
            " Selecionei cuidadosamente plantas de porte reduzido, devido ao espaço limitado. Mantive uma rotina constante de rega e cuidados diários, garantindo o desenvolvimento saudável das plantas. Esse cultivo interno proporcionou não apenas um ambiente estético agradável, mas também a disponibilidade de ervas frescas e frutas para consumo próprio, agregando um toque especial aos pratos preparados em casa.",
          local: "São Paulo - SP | Jabaquara",
          data: "2021-04-01",
          fotosTrabalho: JSON.stringify([
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/lidia-port-img-1.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/lidia-port-img-2.jpg ",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/lidia-port-img-3.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/lidia-port-img-4.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/lidia-port-img-5.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/lidia-port-img-6.jpg",
            /*Colocar as 6 imagens do trabalho aqui*/
          ]),
        },
        {
          titulo: "Alimentos saudaveis ",
          descricao:
            "Meu foco principal sempre foi produzir hortaliças e alimentos saudáveis. A dedicação ao cultivo vai muito além do plantio; envolve um cuidado a cada etapa do processo. Ao preparar o solo, me certifiquei de que estivesse rico em nutrientes, utilizando técnicas orgânicas para melhorar sua qualidade. A escolha das sementes foi criteriosa, optando por variedades adaptadas ao clima local e mais resistentes a doenças. Durante o plantio, fiz questão de proporcionar a quantidade adequada de água e monitorar constantemente as plantas para garantir que recebessem os nutrientes necessários.",
          local: "São Paulo - SP | Sumaré",
          data: "2023-05-15",
          fotosTrabalho: JSON.stringify([
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/soraia-port-img-1.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/soraia-port-img-2.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/soraia-port-img-3.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/soraia-port-img-4.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/soraia-port-img-5.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/soraia-port-img-6.jpg",
            /*Colocar as 6 imagens do trabalho aqui*/
          ]),
        },
        {
          titulo: "Horta em apartamento",
          descricao:
            "Cultivar hortaliças em apartamentos foi uma jornada empolgante. Encontrar espaço foi o primeiro passo; usei vasos e caixas em áreas ensolaradas como janelas e sacadas para criar meu pequeno espaço verde. A escolha das hortaliças foi crucial. Optei por variedades, como alfaces, tomates-cereja que se adaptam bem a espaços limitados. A experiência me mostrou a gratificação de cultivar alimentos frescos em espaços limitados, além de contribuir para uma alimentação mais saudável e sustentável.",
          local: "São Paulo - SP | Araçapuca da Terra",
          data: "2023-08-18",
          fotosTrabalho: JSON.stringify([
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/jose-port-img-1.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/jose-port-img-2.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/jose-port-img-3.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/jose-port-img-4.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/jose-port-img-5.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/jose-port-img-6.jpg",
            /*Colocar as 6 imagens do trabalho aqui*/
          ]),
        },
        {
          titulo: "Hortas em escolas.",
          descricao:
            "Na escola, criar uma horta foi muito legal! A gente fez tudo, desde mexer na terra até plantar e cuidar das plantinhas. Aprendemos sobre verduras, frutas e como elas crescem. Descobri que água, sol e nutrientes são super importantes para as plantas. Cuidar da horta foi responsabilidade minha e dos alunos, regamos, tiramos as ervas ruins e colhemos as comidinhas frescas que plantamos. Foi demais! Ainda aprendemos a comer melhor e ficamos mais próximos da natureza. Foi uma experiência legal e aprendemos muito!",
          local: "São Paulo - SP | Araçapuca da Terra",
          data: "2023-12-19",
          fotosTrabalho: JSON.stringify([
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/maria-port-img-1.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/maria-port-img-2.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/maria-port-img-4.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/maria-port-img-3.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/maria-port-img-5.jpg",
            "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/maria-port-img-6.jpg",
            /*Colocar as 6 imagens do trabalho aqui*/
          ]),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("TrabalhosPortfolio", null, {});
  },
};
