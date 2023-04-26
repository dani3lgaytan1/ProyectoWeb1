"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormafacialRoutes = void 0;
const express_1 = require("express");
const FormaFacialController_1 = require("../controllers/FormaFacialController");
const auth_1 = require("../middleware/auth"); //para poner seguridad en el servidor 
class FormaFacialRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/one/:id', auth_1.validarToken, FormaFacialController_1.formafacialController.listOne);
        this.router.get('/:id1', auth_1.validarToken, FormaFacialController_1.formafacialController.listOnepaciente);
        this.router.post('/', auth_1.validarToken, FormaFacialController_1.formafacialController.crear_formafacial);
        this.router.put('/actualiza/:id', auth_1.validarToken, FormaFacialController_1.formafacialController.actualizar_formafacial);
        this.router.delete('/elimina/:id', auth_1.validarToken, FormaFacialController_1.formafacialController.eliminar_formafacial);
    }
}
exports.FormafacialRoutes = new FormaFacialRoutes();
exports.default = exports.FormafacialRoutes.router;
