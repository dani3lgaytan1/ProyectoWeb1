"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriasRoutes = void 0;
const express_1 = require("express");
const categoriasController_1 = require("../controllers/categoriasController");
class CategoriasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', categoriasController_1.categoriaController.list); //obtener la lista de usuarios en la base de datos 
    }
}
exports.categoriasRoutes = new CategoriasRoutes();
exports.default = exports.categoriasRoutes.router;
