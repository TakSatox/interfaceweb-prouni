const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../config/database");
const Species = require("./species.model");


const Produtos = sequelize.define(
    "products",
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

        UNIDADE: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

Produtos.Species = Species.hasMany(Produtos);

module.exports = Produtos;