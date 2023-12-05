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
    artigoBlog.belongsTo(models.FontePost, { foreignKey: "idFonte", as: "artigo" });

    artigoBlog.belongsTo(models.CategoriaPost, { foreignKey: "idCategoria", as: "artigo" });
  }

  return artigoBlog;
}

module.exports = artigoSchema;

