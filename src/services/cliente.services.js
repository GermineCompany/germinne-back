const { Usuario, Endereco } = require("../../database/models");

const { StatusCodes } = require("http-status-codes");

const bcrypt = require('../utils/bcrypt');

const loginCliente = async (body) => {
  const cliente = await Usuario.findOne({ where: { email: body.email } });

  if (cliente == null) {
    throw Object({ status: StatusCodes.NOT_FOUND, message: "O email não esta cadastrado!" });
  }

  if (!bcrypt.comparePassword(body.senha, cliente.senha)) {
    throw Object({ status: StatusCodes.NOT_FOUND, message: "A senha está incorreta!" });
  }

  return cliente;
};

const registerCliente = async (body) => {
  const insertEndereco = await Endereco.create({
    rua: 'Rua Tito',
    bairro: 'Vila Romana',
    cidade: 'São Paulo',
    pais: 'Brasil',
    cep: '05851000',
    numero: '54 - Senac Lapa Tito'
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
