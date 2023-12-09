const { Usuario, Endereco } = require("../../database/models");

const { StatusCodes } = require("http-status-codes");

const bcrypt = require('../utils/bcrypt');

const loginCliente = async (body) => {
  const cliente = await Usuario.findOne({ where: { email: body.email } });

  if (cliente == null) {
    throw Object({ status: StatusCodes.NOT_FOUND, message: "O email não esta cadastrado!" });
  }

  if (!bcrypt.comparePassword(body.senha, cliente.senha)) {
    throw Object({ status: StatusCodes.UNAUTHORIZED, message: "A senha está incorreta!" });
  }

  return {
    message: "Login realizado com sucesso!",
    idCliente: cliente.idUsuario
  };
};

const registerCliente = async (body) => {
  const insertEndereco = await Endereco.create({
    rua: body.rua,
    bairro: body.bairro,
    cidade: body.cidade,
    pais: body.pais,
    cep: body.cep,
    numero: body.numero
  });

  const hashSenha = bcrypt.encodePassword(body.senha);
  const insertCliente = await Usuario.create({
    nome: body.nome,
    sobrenome: body.sobrenome,
    email: body.email,
    senha: hashSenha,
    cpf: body.cpf,
    dataDeNascimento: body.dataDeNascimento,
    idEndereco: insertEndereco.dataValues.idEndereco
  });

  return { 
    message: 'Usuario cadastrado com sucesso!',
    idCliente: insertCliente.dataValues.idUsuario
    };
};

module.exports = {
  loginCliente,
  registerCliente
};
