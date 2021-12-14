require("dotenv").config();

const mysql = require("mysql2");


const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB
});


connection.connect((error) => {
    if (error) {
        console.log("Erro ao conectar ao banco de dados");
        return;
    }
    console.log("Conectado ao banco de dados");
});


module.exports = connection;