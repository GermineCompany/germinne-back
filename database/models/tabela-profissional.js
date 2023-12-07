const profissionalSchema = (sequelize, DataTypes) => {
    const profissionalTable = sequelize.define(
        "Profissional",
        {
            idProfissional: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nome: DataTypes.STRING,
            sobrenome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            cpf: DataTypes.STRING,
            rg: DataTypes.STRING,
            dataDeNascimento: DataTypes.DATE,
            biografia: DataTypes.STRING,
            telefone: DataTypes.STRING,
            celular: DataTypes.STRING,
            imagemPerfil: DataTypes.STRING,
            imagemPortfolio: DataTypes.STRING,
            idEndereco: DataTypes.STRING,
        },
        { timestamps: false, freezeTableName: true }
    );

    profissionalTable.associate = (models) => {
        profissionalTable.belongsTo(models.Endereco, {
            foreignKey: "idEndereco",
            as: "endereco",
        });
    };

    return profissionalTable;
};

module.exports = profissionalSchema;
