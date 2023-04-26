"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tratamientoRoutes = void 0;
const express_1 = require("express");
const tratamientoController_1 = require("../controllers/tratamientoController");
const auth_1 = require("../middleware/auth"); //para poner seguridad en el servidor 
class TratamientoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id', auth_1.validarToken, tratamientoController_1.tratamientoController.listOne);
        this.router.get('/paciente/:id1', auth_1.validarToken, tratamientoController_1.tratamientoController.listratamientos);
        this.router.get('/saldo/:id2', auth_1.validarToken, tratamientoController_1.tratamientoController.saldo);
        this.router.post('/', auth_1.validarToken, tratamientoController_1.tratamientoController.crear_tratamiento);
        this.router.put('/actualiza/:id', auth_1.validarToken, tratamientoController_1.tratamientoController.actualizar_tratamiento);
        this.router.delete('/elimina/:id', auth_1.validarToken, tratamientoController_1.tratamientoController.eliminar_tratamiento);
    }
}
exports.tratamientoRoutes = new TratamientoRoutes();
exports.default = exports.tratamientoRoutes.router;
