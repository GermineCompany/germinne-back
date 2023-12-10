const { Profissional, Endereco, ServicosOferecidos, TrabalhosPortfolio } = require("../../database/models");

const bcrypt = require('../utils/bcrypt');

const { StatusCodes } = require("http-status-codes");

const getProfissionais = async () => {
    const profissionais = Profissional.findAll({
        attributes: { exclude: 'idEndereco' },
        include: [
            {
                model: Endereco, as: 'endereco'
            },
            {
                model: ServicosOferecidos, as: 'profissionalServicos',
                attributes: { exclude: ['profissionalServico'] },
            },
            {
                model: TrabalhosPortfolio, as: 'profissionalTrabalhos'
            }
        ]
    });

    return profissionais;
};

const registerProfissional = async (body) => {
    const checkEmail = await Profissional.findOne({ where: { email: body.email } });

    if (checkEmail) {
        throw Object({ status: StatusCodes.CONFLICT, message: "O email já está cadastrado!" });
    }

    const encodePassword = bcrypt.encodePassword(body.senha);

    body.senha = encodePassword;

    const createProfissional = await Profissional.create({
        ...body
    });

    return createProfissional;
};

const getProfissionalById = async (id) => {
    const profissional = Profissional.findByPk(id, {
        attributes: { exclude: 'idEndereco' },
        include: [
            {
                model: Endereco, as: 'endereco'
            },
            {
                model: ServicosOferecidos, as: 'profissionalServicos',
                attributes: { exclude: ['profissionalServico'] },
            },
            {
                model: TrabalhosPortfolio, as: 'profissionalTrabalhos'
            }
        ]
    });

    return profissional;
};

const updateProfissional = async (body, id) => {
    if (body.rua) {
        const insertEndereco = await Endereco.create({
            rua: body.rua,
            bairro: body.bairro,
            cidade: body.cidade,
            pais: body.pais,
            cep: body.cep,
            numero: body.numero
        });

        body.idEndereco = insertEndereco.dataValues.idEndereco;
    }

    if (body.senha) {
        body.senha = bcrypt.encodePassword(body.senha);
    }

    const result = await Profissional.update({ ...body }, { where: { idProfissional: id }});

    if (result[0] === 0) {
        throw Object({ status: StatusCodes.INTERNAL_SERVER_ERROR, message: "Ocorreu um erro ao atualizar as informações..." });
    } else {
        return {
            message: "Cadastro atualizado com sucesso!"
        }
    }
};

module.exports = {
    registerProfissional,
    getProfissionais,
    getProfissionalById,
    updateProfissional
}