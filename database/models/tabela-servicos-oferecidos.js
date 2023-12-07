const servicosOferecidosSchema = (sequelize, DataTypes) => {
    const servicosOferecidosTable = sequelize.define(
        "ServicosOferecidos",
        {
            idServico: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            servico: DataTypes.STRING,
        },
        { timestamps: false, freezeTableName: true }
    );

    return servicosOferecidosTable;
};

module.exports = servicosOferecidosSchema;
