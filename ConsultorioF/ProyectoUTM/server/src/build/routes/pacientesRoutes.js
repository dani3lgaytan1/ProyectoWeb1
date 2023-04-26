"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pacientesRoutes = void 0;
const express_1 = require("express");
const pacienteCotroller_1 = require("../controllers/pacienteCotroller");
const auth_1 = require("../middleware/auth"); //para poner seguridad en el servidor 
class PacienteRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', auth_1.validarToken, pacienteCotroller_1.pacienteController.list); //obtener la lista de usuarios en la base de datos 
        this.router.get('/:id1', auth_1.validarToken, pacienteCotroller_1.pacienteController.listOne); //obtener solo un usuario dependiendo de su id
        this.router.get('/ultimo/id', auth_1.validarToken, pacienteCotroller_1.pacienteController.ultimoingresado);
        this.router.post('/', auth_1.validarToken, pacienteCotroller_1.pacienteController.crear_paciente); //crear un nuevo usuario 
        this.router.post('/importarPaciente', auth_1.validarToken, pacienteCotroller_1.pacienteController.ImportarPaciente); //ingresae varios pacientes importados 
        this.router.put('/update/:id', auth_1.validarToken, pacienteCotroller_1.pacienteController.actualizar_paciente); //actualizar un usuario
        this.router.delete('/elimina/:id', auth_1.validarToken, pacienteCotroller_1.pacienteController.eliminar_paciente); //eliminar a un usuario
    }
}
exports.pacientesRoutes = new PacienteRoutes();
exports.default = exports.pacientesRoutes.router;
