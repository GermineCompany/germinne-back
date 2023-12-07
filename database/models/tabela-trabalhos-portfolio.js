const trabalhosPortfolioSchema = (sequelize, DataTypes) => {
    const trabalhosPortfolioTable = sequelize.define(
        "TrabalhosPortfolio",
        {
            idTrabalho: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            titulo: DataTypes.STRING,
            descricao: DataTypes.STRING,
            local: DataTypes.STRING,
            data: DataTypes.DATE,
            fotosTrabalho: DataTypes.STRING
        },
        { timestamps: false, freezeTableName: true }
    );

    return trabalhosPortfolioTable;
};

module.exports = trabalhosPortfolioSchema;
