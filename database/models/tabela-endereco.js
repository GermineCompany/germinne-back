const enderecoSchema = (sequelize, DataTypes) => {
  const enderecoTable = sequelize.define(
    "Endereco",
    {
      idEndereco: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      rua: DataTypes.STRING,
      bairro: DataTypes.STRING,
      cidade: DataTypes.STRING,
      pais: DataTypes.STRING,
      cep: DataTypes.STRING,
      numero: DataTypes.STRING,
    },
    { timestamps: false, freezeTableName: true }
  );

  enderecoTable.associate = (models) => {
    enderecoTable.hasOne(models.Usuario, {
      foreignKey: "idEndereco",
      as: "usuario",
    });
  };

  return enderecoTable;
};

module.exports = enderecoSchema;
