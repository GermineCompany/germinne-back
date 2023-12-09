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

module.exports = {
    registerProfissional,
    getProfissionais,
    getProfissionalById
}