const { PostBlog, CategoriaPost, FontePost } = require('../../database/models');

const getPosts = async () => {
  const posts = await PostBlog.findAll({
    include: [
      { model: CategoriaPost, as: 'postCategoria' },
      { model: FontePost, as: 'postFonte' }
    ],
    attributes: { exclude: ['idCategoria', 'idFonte']}
  });

  return posts;
};

module.exports = {
  getPosts,
};
