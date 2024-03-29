require("dotenv").config();
const jwt = require("jsonwebtoken");

const publicRoutes = ("/", "/api/auth"); 

const AuthMiddleware = (req, res, next) => {

    const {authorization} = req.headers;

    if(publicRoutes.includes(req.url)) {
        return next();
    }

    if(!authorization) {
        return res.status(401).send({message: "No Authorization"});
    };

    const [, token] = authorization.split(" ");

    try {
        jwt.verify(token, process.env.JWT_SECRET);
        next()
    } catch(error) {
        res.status(401).send({message: "Token Inválido"});
    };
};


module.exports = AuthMiddleware;