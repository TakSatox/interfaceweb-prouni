const ProductModel = require("../model/product.model");
const Controller = require("./controller");


class ProductController extends Controller{
    constructor() {
        super(ProductModel);
    };
};


module.exports = ProductController;