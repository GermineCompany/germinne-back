const categoriaSchema = (sequelize, DataTypes) => {
  const categoriaBlog = sequelize.define("CategoriaPost", {
    idCategoria: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    categoria: DataTypes.STRING
  }, { timestamps: false, freezeTableName: true, } );

  categoriaBlog.associate = (models) => {
    categoriaBlog.hasOne(models.PostBlog, { foreignKey: "idCategoria", as: "categoria1" });
  }

  return categoriaBlog;
}

module.exports = categoriaSchema;

