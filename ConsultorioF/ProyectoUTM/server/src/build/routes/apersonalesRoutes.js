"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apersonalesRoutes = void 0;
const express_1 = require("express");
const personalesController_1 = require("../controllers/personalesController");
const auth_1 = require("../middleware/auth"); //para poner seguridad en el servidor 
class PersonalesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //estas rutas son  para la tabla de hereditarios
        this.router.get('/', auth_1.validarToken, personalesController_1.personalesController.list);
        this.router.get('/:id1', auth_1.validarToken, personalesController_1.personalesController.listOne); //las patologias de un solo paciente segun el id 
        this.router.post('/', auth_1.validarToken, personalesController_1.personalesController.crear_tpersonales); //crear un nuevo usuario 
        this.router.put('/actualiza/:id', auth_1.validarToken, personalesController_1.personalesController.actualizar_tpersonales); //actualizar un usuario
        this.router.delete('/elimina/:id', auth_1.validarToken, personalesController_1.personalesController.eliminar_tpersonales); //eliminar a un usuario
    }
}
exports.apersonalesRoutes = new PersonalesRoutes();
exports.default = exports.apersonalesRoutes.router;
