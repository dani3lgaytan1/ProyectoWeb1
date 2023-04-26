"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.odontogramaRoutes = void 0;
const express_1 = require("express");
const odontogramaController_1 = require("../controllers/odontogramaController");
class OdontogramaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', odontogramaController_1.odontogramaController.listOC);
        this.router.get('/:id1', odontogramaController_1.odontogramaController.listOne); //las patologias de un solo paciente segun el id 
        this.router.post('/', odontogramaController_1.odontogramaController.crear_tablaOC); //crear un nuevo usuario 
        this.router.put('/actualiza/:id', odontogramaController_1.odontogramaController.actualizar_tablaOC); //actualizar un usuario
        this.router.delete('/elimina/:id', odontogramaController_1.odontogramaController.eliminar_tablaOC); //eliminar a un usuario  
    }
}
exports.odontogramaRoutes = new OdontogramaRoutes();
exports.default = exports.odontogramaRoutes.router;
