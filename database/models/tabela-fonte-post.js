const fontPostSchema = (sequelize, DataTypes) => {
  const fontPostTable = sequelize.define("FontePost", {
    idFonte: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fonte: DataTypes.STRING,
    data: DataTypes.DATE
  }, { timestamps: false, freezeTableName: true, } );

  fontPostTable.associate = (models) => {
    fontPostTable.hasOne(models.PostBlog, { foreignKey: "idFonte", as: "fonte" });
  }

  return fontPostTable;
}

module.exports = fontPostSchema;

