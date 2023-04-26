"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consultasRoutes = void 0;
const express_1 = require("express");
const consultasController_1 = require("../controllers/consultasController");
const auth_1 = require("../middleware/auth"); //para poner seguridad en el servidor 
class ConsultasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id', auth_1.validarToken, consultasController_1.consultaController.list);
        this.router.get('/unaconsulta/:id', auth_1.validarToken, consultasController_1.consultaController.listOne);
        this.router.get('/dia/:fechapedida', auth_1.validarToken, consultasController_1.consultaController.listFecha);
        this.router.post('/', auth_1.validarToken, consultasController_1.consultaController.crear_consulta); //crear un nuevo usuario 
        this.router.put('/update/:id', auth_1.validarToken, consultasController_1.consultaController.actualizar_consulta); //actualizar un usuario
        this.router.delete('/delete/:id', auth_1.validarToken, consultasController_1.consultaController.eliminar_consulta); //eliminar a un usuario
        this.router.get('/agenda/:fecha/:hora', auth_1.validarToken, consultasController_1.consultaController.listhora);
        //this.router.get('/:id1/:id2',consultaController.listRange);
    }
}
exports.consultasRoutes = new ConsultasRoutes();
exports.default = exports.consultasRoutes.router;
