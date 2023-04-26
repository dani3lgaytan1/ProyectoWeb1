"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apnopatologicosRoutes = void 0;
const express_1 = require("express");
const apnopatologicosController_1 = require("../controllers/apnopatologicosController");
const auth_1 = require("../middleware/auth"); //para poner seguridad en el servidor 
class NoPatologicosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', auth_1.validarToken, apnopatologicosController_1.nopatologicoController.list); //obtener la lista de las tablas correspondientes en la base de datos 
        this.router.get('/:id1', auth_1.validarToken, apnopatologicosController_1.nopatologicoController.listOne); //obtener solo la tabla dependiendo del id del paciente
        this.router.post('/', auth_1.validarToken, apnopatologicosController_1.nopatologicoController.crear_tablanp); //crear un nueva tabla de no patologicos 
        this.router.put('/actualiza/:id', auth_1.validarToken, apnopatologicosController_1.nopatologicoController.actualizar_tablanp); //actualizar un usuario
        this.router.delete('/elimina/:id', auth_1.validarToken, apnopatologicosController_1.nopatologicoController.eliminar_tablanp); //eliminar a un usuario
    }
}
exports.apnopatologicosRoutes = new NoPatologicosRoutes();
exports.default = exports.apnopatologicosRoutes.router;
