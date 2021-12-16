require("dotenv").config();

const jwt = require("jsonwebtoken");
const UserModel = require("../model/user.model");
const Controller = require("./controller");


class UserController extends Controller{
    constructor() {
        super(UserModel);
    };

    async auth(req, res) {
        const {USUÁRIO, SENHA} = req.body;

        const user = await UserModel.findOne({raw: true, where: { USUÁRIO, SENHA }});

        if(!user || !SENHA) {
            res.send({ error_message: "Credenciais Inválidas" });
        }

        delete user.SENHA;

        const token = jwt.sign(user, process.env.JWT_SECRET);

        return res.send({ token })

    }
};


module.exports = UserController;