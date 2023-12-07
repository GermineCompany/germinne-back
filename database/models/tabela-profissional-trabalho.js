const profissionalTrabalhoSchema = (sequelize, DataTypes) => {
    const profissionalTrabalhoTable = sequelize.define("ProfissionalTrabalho",
        {
            idProfissional: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            idTrabalho: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
        },
        { timestamps: false, freezeTableName: true, }
    );

    profissionalTrabalhoTable.associate = (models) => {
        models.Profissional.belongsToMany(models.TrabalhosPortfolio, {
            through: profissionalTrabalhoTable,
            foreignKey: 'idProfissional',
            otherKey: 'idTrabalho',
            as: 'profissionalTrabalhos'
        });

        models.TrabalhosPortfolio.belongsToMany(models.Profissional, {
            through: profissionalTrabalhoTable,
            foreignKey: 'idTrabalho',
            otherKey: 'idProfissional',
            as: 'trabalhoProfissional'
        });
    }

    return profissionalTrabalhoTable;
}

module.exports = profissionalTrabalhoSchema;
