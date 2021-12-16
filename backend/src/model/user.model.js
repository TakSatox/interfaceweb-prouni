const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../config/database");


const User = sequelize.define(
    "users",
    {
        CÓDIGO: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        USUÁRIO: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        SENHA: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = User;