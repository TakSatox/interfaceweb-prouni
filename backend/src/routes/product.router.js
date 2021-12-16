const express = require("express");
const Router = express.Router();
const ProductController = require("../controllers/product.controller");
const productController = new ProductController;


Router.get("/product/:code", (req, res) => productController.getOne(req, res));
Router.get("/product", (req, res) => productController.getAll(req, res));
Router.post("/product", (req, res) => productController.store(req, res));
Router.put("/product/:code", (req, res) => productController.update(req, res));
Router.delete("/product/:code", (req, res) => productController.remove(req, res));


module.exports = Router;
