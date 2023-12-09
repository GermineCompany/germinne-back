const { StatusCodes } = require('http-status-codes');

const service = require('../services/profissional.services')

const registerProfissional = async (req, res) => {
    const result = await service.registerProfissional(req.body);

    res.status(StatusCodes.CREATED).json(result);
};

const getProfissional = async (req, res) => {
    const profissionais = await service.getProfissionais();

    res.status(StatusCodes.OK).json(profissionais);
};

const getProfissionalById = async (req, res) => {
    const profissional = await service.getProfissionalById(req.params.id);

    res.status(StatusCodes.OK).json(profissional);
};

module.exports = {
    registerProfissional,
    getProfissional,
    getProfissionalById
}