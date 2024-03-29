const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../config/database");
const Species = require("./species.model");


const Products = sequelize.define(
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

Products.Species = Species.hasMany(Products);

module.exports = Products;