const connection = require("../config/database");



class productController {
    store(req, res) {
        connection.query(`SELECT * FROM relatorio.produto`)
        
    };

    async getAll(req, res) {
        try{
        const result = await connection.promise()
        .query(`SELECT * FROM relatorio.produto`)

        res.send(result[0]);
        } catch (error) {
            res.status(400).send(error)
        };
    };
    
    getOne(req, res) {

    };

    update(req, res) {
        database.query('SELECT * FROM relatorio.produto', function (error, results, fields) {
            if (error) throw error;
            res.send(results);
          });;
    };

    remove(req, res) {
        database.query('SELECT * FROM relatorio.produto', function (error, results, fields) {
            if (error) throw error;
            res.send(results);
          });;
    };
};


module.exports = productController;