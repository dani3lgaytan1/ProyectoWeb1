"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afhereditariosRoutes = void 0;
const express_1 = require("express");
const afhereditarioController_1 = require("../controllers/afhereditarioController");
const auth_1 = require("../middleware/auth"); //para poner seguridad en el servidor 
class HereditarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/ultimo/id', auth_1.validarToken, afhereditarioController_1.hereditarioController.ultimo);
        this.router.get('/paciente/:id1', auth_1.validarToken, afhereditarioController_1.hereditarioController.obtenerid);
        this.router.get('/:id1', auth_1.validarToken, afhereditarioController_1.hereditarioController.listOne); //las patologias de un solo paciente segun el id 
        this.router.post('/', auth_1.validarToken, afhereditarioController_1.hereditarioController.crear_tablafh); //crear un nuevo usuario 
        this.router.put('/actualiza/:id', auth_1.validarToken, afhereditarioController_1.hereditarioController.actualizar_tablafh); //actualizar un usuari
        this.router.put('/delete/:id', auth_1.validarToken, afhereditarioController_1.hereditarioController.eliminar_tablafh); //actualizar un usuari
    }
}
exports.afhereditariosRoutes = new HereditarioRoutes();
exports.default = exports.afhereditariosRoutes.router;
