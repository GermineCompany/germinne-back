const produtoSementeSchema = (sequelize, DataTypes) => {
    const produtoSementeTable = sequelize.define("ProdutoSemente", {
        idProduto: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        idSemente: {
            type: DataTypes.INTEGER,
            primaryKey: true
        }
    }, { timestamps: false, freezeTableName: true, });

    produtoSementeTable.associate = (models) => {
        models.Produto.belongsToMany(models.Semente, {
            through: produtoSementeTable,
            foreignKey: 'idProduto',
            otherKey: 'idSemente',
            as: 'produtoSemente'
        });

        models.Semente.belongsToMany(models.Produto, {
            through: produtoSementeTable,
            foreignKey: 'idSemente',
            otherKey: 'idProduto',
            as: 'sementeProduto'
        });
    }

    return produtoSementeTable;
}

module.exports = produtoSementeSchema;

