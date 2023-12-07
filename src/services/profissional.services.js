const { Profissional, Endereco, ServicosOferecidos, TrabalhosPortfolio } = require("../../database/models");

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
    const profissional = Profissional.findAll({
        attributes: { exclude: 'idEndereco' },
        include: [
            {
                model: Endereco, as: 'endereco'
            },
            {
                model: ServicosOferecidos, as: 'profissionalServicos',
                attributes: { exclude: ['profissionalServico'] },
            }
        ]
    });

    return profissional;
};

module.exports = {
    registerProfissional,
    getProfissionais
}