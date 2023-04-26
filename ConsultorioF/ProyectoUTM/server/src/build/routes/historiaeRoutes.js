"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.historiaexamenRoutes = void 0;
const express_1 = require("express");
const HistoriaEController_1 = require("../controllers/HistoriaEController");
const auth_1 = require("../middleware/auth"); //para poner seguridad en el servidor 
class HistoriaExamenRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id1', auth_1.validarToken, HistoriaEController_1.historiaExamenController.listOnepaciente);
        this.router.post('/', auth_1.validarToken, HistoriaEController_1.historiaExamenController.crear_historiaE);
        this.router.put('/actualiza/:id', auth_1.validarToken, HistoriaEController_1.historiaExamenController.actualizar_historiaE);
        this.router.delete('/elimina/:id', auth_1.validarToken, HistoriaEController_1.historiaExamenController.eliminar_historiaE);
    }
}
exports.historiaexamenRoutes = new HistoriaExamenRoutes();
exports.default = exports.historiaexamenRoutes.router;
