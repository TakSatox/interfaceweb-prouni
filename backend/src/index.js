const express = require("express");
const Router = require("./routes/product.router");
const ProductRouter = require("./routes/product.router");


const app = express();


app.use(express.json());

app.use("/api", ProductRouter);

app.get("/", (req, res) => {
    res.send("OK");
});

app.listen(3333, () => {
    console.log("Aplicação rodando em 3333");
});



