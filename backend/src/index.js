require("dotenv").config()


const express = require("express");

const morgan = require("morgan");

const ProductRouter = require("./routes/product.router");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(morgan("tiny"));

app.use("/api", ProductRouter);

app.get("/", (req, res) => {
    res.send("OK");
});

app.listen(port, () => {
    console.log("Aplicação rodando em", port);
});



