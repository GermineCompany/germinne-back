const { StatusCodes } = require('http-status-codes');

const service = require('../services/blog.services');

const getPost = async (req, res) => {
  const posts = await service.getPosts();

  res.status(StatusCodes.NOT_FOUND).json(posts);
};

module.exports = {
  getPost,
};
