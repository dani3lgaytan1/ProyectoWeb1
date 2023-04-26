"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afhpatologiasRoutes = void 0;
const express_1 = require("express");
const patologiasHController_1 = require("../controllers/patologiasHController");
const auth_1 = require("../middleware/auth"); //para poner seguridad en el servidor 
class HereditarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //los que vienen despues son para ingresar las patologias hereditarias
        this.router.get('/', auth_1.validarToken, patologiasHController_1.patologiasHController.listpatologias);
        this.router.get('/:id1', auth_1.validarToken, patologiasHController_1.patologiasHController.listOnepatologia); //una patologias segun su id 
        this.router.post('/', auth_1.validarToken, patologiasHController_1.patologiasHController.crear_patologia); //crear un nuevo usuario 
        this.router.put('/actualiza/:id', auth_1.validarToken, patologiasHController_1.patologiasHController.actualizar_patologia); //actualizar un usuario
        this.router.delete('/elimina/:id', auth_1.validarToken, patologiasHController_1.patologiasHController.eliminar_patologia); //eliminar a un usuario
    }
}
exports.afhpatologiasRoutes = new HereditarioRoutes();
exports.default = exports.afhpatologiasRoutes.router;
