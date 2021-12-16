const express = require("express");
const Router = express.Router();
const SpeciesController = require("../controllers/species.controller");
const speciesController = new SpeciesController;


Router.get("/species/:code", (req, res) => speciesController.getOne(req, res));
Router.get("/species", (req, res) => speciesController.getAll(req, res));
Router.post("/species", (req, res) => speciesController.store(req, res));
Router.put("/species/:code", (req, res) => speciesController.update(req, res));
Router.delete("/species/:code", (req, res) => speciesController.remove(req, res));


module.exports = Router;