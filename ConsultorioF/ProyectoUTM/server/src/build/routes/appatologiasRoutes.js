"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appatologiasRoutes = void 0;
const express_1 = require("express");
const patologiasAPController_1 = require("../controllers/patologiasAPController");
class PatologiasPRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //los que vienen despues son para ingresar las patologias hereditarias
        this.router.get('/', patologiasAPController_1.patologiasAPController.listpatologias);
        this.router.get('/:id', patologiasAPController_1.patologiasAPController.listOne);
        this.router.get('/:id1', patologiasAPController_1.patologiasAPController.listOnepatologia); //una patologias segun su id 
        this.router.post('/', patologiasAPController_1.patologiasAPController.crear_patologia); //crear un nuevo usuario 
        this.router.put('/actualiza/:id', patologiasAPController_1.patologiasAPController.actualizar_patologia); //actualizar un usuario
        this.router.delete('/elimina/:id', patologiasAPController_1.patologiasAPController.eliminar_patologia); //eliminar a un usuario
    }
}
exports.appatologiasRoutes = new PatologiasPRoutes();
exports.default = exports.appatologiasRoutes.router;
