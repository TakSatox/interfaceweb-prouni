const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");


const Species = sequelize.define(
    "species",
    {
        CÓDIGO: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        DESCRIÇÃO: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = Species;

