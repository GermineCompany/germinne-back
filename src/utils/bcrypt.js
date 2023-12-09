const bcrypt = require('bcrypt');

const saltRounds = bcrypt.genSaltSync(5);

const encodePassword = (password) => bcrypt.hashSync(password, saltRounds);

const comparePassword = (bodyPassword, dbPassword) => bcrypt.compareSync(bodyPassword, dbPassword);

module.exports = {
  encodePassword,
  comparePassword,
};
