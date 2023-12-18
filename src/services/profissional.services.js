const { Profissional, Endereco, ServicosOferecidos, TrabalhosPortfolio } = require("../../database/models");

const bcrypt = require('../utils/bcrypt');

const { StatusCodes } = require("http-status-codes");

const loginProfissional = async (body) => {
    const profissional = await Profissional.findOne({ where: { email: body.email } });

    if (profissional == null) {
        throw Object({ status: StatusCodes.NOT_FOUND, message: "O email não esta cadastrado!" });
    }

    if (!bcrypt.comparePassword(body.senha, profissional.senha)) {
        throw Object({ status: StatusCodes.UNAUTHORIZED, message: "A senha está incorreta!" });
    }

    return {
        message: "Login realizado com sucesso!",
        id: profissional.idProfissional,
        nome: profissional.nome,
        sobrenome: profissional.sobrenome
    };
};

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

    return {
        message: 'Profissional cadastrado com sucesso!',
        id: createProfissional.dataValues.idProfissional,
        nome: createProfissional.dataValues.nome,
        sobrenome: createProfissional.dataValues.sobrenome
    };
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

const updateProfissionalEndereco = async (body, id) => {
    const profissional = await Profissional.findByPk(id);

    if (!profissional.dataValues.idEndereco) {
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

    if (profissional.dataValues.idEndereco) {
        await Endereco.update({
            rua: body.rua,
            bairro: body.bairro,
            cidade: body.cidade,
            pais: body.pais,
            cep: body.cep,
            numero: body.numero
        }, { where: { idEndereco: profissional.dataValues.idEndereco } });

        return { message: "Endereço atualizado com sucesso!" };
    }
};

const updateProfissional = async (body, id) => {
    if (body.senha) {
        body.senha = bcrypt.encodePassword(body.senha);
    }

    const result = await Profissional.update({ ...body }, { where: { idProfissional: id } });

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
    updateProfissional,
    loginProfissional,
    updateProfissionalEndereco
}