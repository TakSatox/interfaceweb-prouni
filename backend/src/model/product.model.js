const connection = require("../config/database");

class ProductModel {

    async getAllProducts() {
        const products = await connection.promise()
        .query(`SELECT * FROM relatorio.produtos`);
        return products[0];
    };    

    async getOneProduct(data) {
        const product = await connection.promise()
        .query(`SELECT * FROM relatorio.produtos WHERE CÓDIGO = ${data}`)
        return product[0];
    };

    async createProduct(data) {
        const creation = await connection.promise()
        .query(`INSERT INTO relatorio.produtos (DESCRIÇÃO, UNIDADE)
        VALUES ("${data.DESCRIÇÃO}", "${data.UNIDADE}")`);
        return creation;
    };

    async updateProdutc(data, dataParams) {
        const update = await connection.promise()
        .query(`UPDATE relatorio.produtos 
        SET DESCRIÇÃO = "${data.DESCRIÇÃO}", 
        UNIDADE = "${data.UNIDADE}"
        WHERE CÓDIGO = ${dataParams}`);
        return update;
    };

    async removeProduct(data) {
        const remove = await connection.promise()
        .query(`DELETE FROM relatorio.produtos
        WHERE CÓDIGO = ${data}`);
        return remove;
    };


};

module.exports = ProductModel;