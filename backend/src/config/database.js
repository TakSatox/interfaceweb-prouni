require("dotenv").config();

const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, 
  {
  host: process.env.DB_HOST,
  dialect: "mysql"
  }
);

sequelize
.authenticate()
.then(() => {
  console.log("Sequelize conectado ao banco com sucesso");
})
.catch((error) => {
  console.log(error);
});

sequelize
.sync()
.then(() => {
  console.log("Sequelize sync succes");
})
.catch(() => {
  console.log("Sequelize sync failed")
});

module.exports = sequelize;