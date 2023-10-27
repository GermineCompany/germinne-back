const artigoSchema = (sequelize, DataTypes) => {
  const artigoBlog = sequelize.define("artigoBlog", {
    idArtigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idCategoria: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    paragrafos: DataTypes.STRING,
    imagens: DataTypes.STRING
  }, { timestamps: false, freezeTableName: true, } );

  artigoBlog.associate = (models) => {
    artigoBlog.belongsTo(models.categoriaBlog, { foreignKey: "idArtigo", as: "categoria" });
  }

  return artigoBlog;
}

module.exports = artigoSchema;

