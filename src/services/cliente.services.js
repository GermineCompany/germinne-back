const { Usuario, Endereco, Produto, StatusPedido, Pedido } = require("../../database/models");
const config = require('../../database/config/config');
const { Op } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.development);

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

const getClienteById = async (id) => {
  const pedidos = await sequelize.query(
    `SELECT 
        a.idPedido,
        a.idProduto,
        a.idStatus,
        c.status AS statusPedido,
        a.quantidade,
        b.nome AS nomeProduto,
        b.descricao AS descricaoProduto,
        b.preco AS precoProduto
      FROM
        Pedido AS a
        INNER JOIN Produto AS b ON a.idProduto = b.idProduto
        INNER JOIN StatusPedido AS c ON a.idStatus = c.idStatus
      WHERE a.idUsuario = ?;`,
      {
        replacements: [id],
        type: Sequelize.QueryTypes.SELECT,
      },
  )

  const infos = await Usuario.findByPk(id, {
    include: { model: Endereco, as: 'endereco' }
  });

  infos.dataValues.clientePedidos = pedidos;

  return infos;
};

const updateCliente = async (body, id) => {
  const result = await Usuario.update({ ...body }, { where: { idUsuario: id } });

  if (body.senha) {
    body.senha = bcrypt.encodePassword(body.senha);
  }

  if (result[0] === 0) {
    throw Object({ status: StatusCodes.INTERNAL_SERVER_ERROR, message: "Ocorreu um erro ao atualizar as informações..." });
  } else {
    return {
      message: "Cadastro atualizado com sucesso!"
    }
  }
};

const updateClienteEndereco = async (body, id) => {
  const cliente = await Usuario.findByPk(id);

  if (!cliente.dataValues.idEndereco) {
    await Endereco.create({
      rua: body.rua,
      bairro: body.bairro,
      cidade: body.cidade,
      pais: body.pais,
      cep: body.cep,
      numero: body.numero
    });

    return { message: "Endereço atualizado com sucesso!" };
  }

  if (cliente.dataValues.idEndereco) {
    await Endereco.update({
      rua: body.rua,
      bairro: body.bairro,
      cidade: body.cidade,
      pais: body.pais,
      cep: body.cep,
      numero: body.numero
    }, { where: { idEndereco: cliente.dataValues.idEndereco } });

    return { message: "Endereço atualizado com sucesso!" };
  }
};

module.exports = {
  loginCliente,
  registerCliente,
  getClienteById,
  updateCliente,
  updateClienteEndereco
};
