const profissionalServicoSchema = (sequelize, DataTypes) => {
    const profissionalServicoTable = sequelize.define("ProfissionalServico",
        {
            idProfissional: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            idServico: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
        },
        { timestamps: false, freezeTableName: true, }
    );

    profissionalServicoTable.associate = (models) => {
        models.Profissional.belongsToMany(models.ServicosOferecidos, {
            through: profissionalServicoTable,
            foreignKey: 'idProfissional',
            otherKey: 'idServico',
            as: 'profissionalServicos'
        });

        models.ServicosOferecidos.belongsToMany(models.Profissional, {
            through: profissionalServicoTable,
            foreignKey: 'idServico',
            otherKey: 'idProfissional',
            as: 'servicoProfissional'
        });
    }

    return profissionalServicoTable;
}

module.exports = profissionalServicoSchema;
