const artigoSchema = (sequelize, DataTypes) => {
  const artigoBlog = sequelize.define("PostBlog", {
    idArtigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idCategoria: DataTypes.INTEGER,
    idFonte: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    conteudo: DataTypes.STRING,
    imagens: DataTypes.STRING
  }, { timestamps: false, freezeTableName: true, } );

  artigoBlog.associate = (models) => {
    artigoBlog.belongsTo(models.categoriaBlog, { foreignKey: "idArtigo", as: "categoria" });
  }

  return artigoBlog;
}

module.exports = artigoSchema;

