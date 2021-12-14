const ProductModel = require("../model/product.model");


class productController {
    constructor() {
        this.productModel = new ProductModel;
    };

    store(req, res) {
        try {
            const creation = this.productModel.createProduct(req.body);
            res.send(creation);
        } catch (error) {
            res.status(400).send(error);
        };
        
    };

    async getAll(req, res) {
        try {
            const products = await this.productModel.getAllProducts(req.body);
            res.send(products);
        } catch (error){
            res.status(400).send(error);
        };
    };
    
    async getOne(req, res) {
        try {
            const product = await this.productModel.getOneProduct(req.params.code);
            res.send(product);
        } catch (error) {
            res.status(400).send(error);        }
    };

    async update(req, res) {
        try {
            const update = await this.productModel.updateProdutc(req.body, req.params.code);
            res.send(update);
        } catch (error) {
            res.status(400).send(error);
        };
    };

    async remove(req, res) {
        try {
            const remove = await this.productModel.removeProduct(req.params.code);
            res.send(remove);
        } catch (error) {
            res.status(400).send(error);
        };
    };
};


module.exports = productController;