const produtoSchema = (sequelize, DataTypes) => {
    const produtoTable = sequelize.define("Produto", {
        idProduto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        preco: DataTypes.FLOAT,
        estoque: DataTypes.INTEGER
    }, { timestamps: false, freezeTableName: true, });

    return produtoTable;
}

module.exports = produtoSchema;

