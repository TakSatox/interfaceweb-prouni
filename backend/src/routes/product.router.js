const express = require("express");
const Router = express.Router();
const ProductController = require("../controllers/product.controller");


const controller = new ProductController();


Router.get("/product/:codigo", (req, res) => {
    controller.getOne(req, res);
})

Router.get("/product", (req, res) => {
    controller.getAll(req, res);
})

Router.post("/product", (req, res) => {
    controller.store(req, res);
})

Router.put("/product/:codigo", (req, res) => {
    controller.update(req, res);
})

Router.delete("/product/:codigo", (req, res) => {
    controller.remove(req, res);
})


module.exports = Router;
