const usuarioSchema = (sequelize, DataTypes) => {
  const usuarioTable = sequelize.define(
    "Usuario",
    {
      idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      email: DataTypes.STRING,
      telefone: DataTypes.STRING,
      senha: DataTypes.STRING,
      cpf: DataTypes.STRING,
      dataDeNascimento: DataTypes.DATE,
      idEndereco: DataTypes.STRING,
    },
    { timestamps: false, freezeTableName: true }
  );

  usuarioTable.associate = (models) => {
    usuarioTable.belongsTo(models.Endereco, {
      foreignKey: "idEndereco",
      as: "endereco",
    });
  };

  return usuarioTable;
};

module.exports = usuarioSchema;
