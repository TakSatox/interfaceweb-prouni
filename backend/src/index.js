require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const ProductRouter = require("./routes/product.router");
const SpeciesRouter = require("./routes/species.router");


const app = express();

app.use(express.json());
app.use(morgan("tiny"));

app.use("/api", ProductRouter);
app.use("/api", SpeciesRouter);

app.get("/", (req, res) => {
    res.send("OK");
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Aplicação rodando em", port);
});

