"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth"); //para poner seguridad en el servidor 
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', auth_1.validarToken, (req, res) => res.send('Sistema del consultorio'));
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
