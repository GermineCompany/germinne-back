const sementesSchema = (sequelize, DataTypes) => {
    const sementesTable = sequelize.define(
        "Semente",
        {
            idSemente: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            semente: DataTypes.STRING
        },
        { timestamps: false, freezeTableName: true }
    );

    return sementesTable;
};

module.exports = sementesSchema;
