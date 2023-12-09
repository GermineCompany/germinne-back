const statusPedidoSchema = (sequelize, DataTypes) => {
    const statusPedidoTable = sequelize.define(
        "StatusPedido",
        {
            idStatus: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            status: DataTypes.STRING
        },
        { timestamps: false, freezeTableName: true }
    );

    statusPedidoTable.associate = (models) => {
        statusPedidoTable.hasOne(models.Pedido, {
            foreignKey: "idStatus",
            as: "statusPedido",
        });
    };

    return statusPedidoTable;
};

module.exports = statusPedidoSchema;
