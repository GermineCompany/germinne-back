const { Usuario } = require("../../database/models");

const loginCliente = async (body) => {
  const cliente = await Usuario.findOne({ where: { email: body.email } });

  if (cliente == null) {
    throw Object({ status: 404, message: "O email nao esta cadastrado!" });
  }

  if (cliente.senha !== body.senha) {
    throw Object({ status: 404, message: "A senha esta incorreta!" });
  }

  return cliente;
};

module.exports = {
  loginCliente,
};
