"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dientesocRoutes = void 0;
const express_1 = require("express");
const dientesocController_1 = require("../controllers/dientesocController");
class DientesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //los que vienen despues son para ingresar las patologias hereditarias
        this.router.get('/', dientesocController_1.dientesocController.listdientes);
        this.router.get('/:id1', dientesocController_1.dientesocController.listOnediente); //una patologias segun su id 
        this.router.post('/', dientesocController_1.dientesocController.crear_diente); //crear un nuevo usuario 
        this.router.put('/actualiza/:id', dientesocController_1.dientesocController.actualizar_diente); //actualizar un usuario
        this.router.delete('/elimina/:id', dientesocController_1.dientesocController.eliminar_diente); //eliminar a un usuario
    }
}
exports.dientesocRoutes = new DientesRoutes();
exports.default = exports.dientesocRoutes.router;
