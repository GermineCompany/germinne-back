const { PostBlog } = require('../../database/models');

const getPosts = async () => {
  const posts = await PostBlog.findAll();

  return posts;
};

module.exports = {
  getPosts,
};
