const pedidoSchema = (sequelize, DataTypes) => {
    const pedidoTable = sequelize.define("Pedido", {
        idPedido: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idProduto: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        idUsuario: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        quantidade: DataTypes.INTEGER,
        data: DataTypes.DATE,
        idStatus: DataTypes.INTEGER
    }, { timestamps: false, freezeTableName: true, });

    pedidoTable.associate = (models) => {
        pedidoTable.belongsTo(models.StatusPedido, { foreignKey: "idStatus", as: "status" });

        models.Produto.belongsToMany(models.Usuario, {
            through: pedidoTable,
            foreignKey: 'idProduto',
            otherKey: 'idUsuario',
            as: 'pedidosUsuario'
        });

        models.Usuario.belongsToMany(models.Produto, {
            through: pedidoTable,
            foreignKey: 'idUsuario',
            otherKey: 'idProduto',
            as: 'usuarioPedidos'
        });
    }

    return pedidoTable;
}

module.exports = pedidoSchema;

