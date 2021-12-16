const express = require("express");
const Router = express.Router();
const UserController = require("../controllers/user.controller");
const userController = new UserController;


Router.post("/auth", (req, res) => userController.auth(req, res));
Router.get("/user/:code", (req, res) => userController.getOne(req, res));
Router.get("/user", (req, res) => userController.getAll(req, res));
Router.post("/user", (req, res) => userController.store(req, res));
Router.put("/user/:code", (req, res) => userController.update(req, res));
Router.delete("/user/:code", (req, res) => userController.remove(req, res));


module.exports = Router;
