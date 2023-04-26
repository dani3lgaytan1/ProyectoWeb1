"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.denticionRoutes = void 0;
const express_1 = require("express");
const denticionController_1 = require("../controllers/denticionController");
const auth_1 = require("../middleware/auth"); //para poner seguridad en el servidor 
class DenticionRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/one/:id', auth_1.validarToken, denticionController_1.denticionController.listOne);
        this.router.get('/:id1', auth_1.validarToken, denticionController_1.denticionController.listOnepaciente);
        this.router.post('/', auth_1.validarToken, denticionController_1.denticionController.crear_denticion);
        this.router.put('/actualiza/:id', auth_1.validarToken, denticionController_1.denticionController.actualizar_denticion);
        this.router.delete('/elimina/:id', auth_1.validarToken, denticionController_1.denticionController.eliminar_denticion);
    }
}
exports.denticionRoutes = new DenticionRoutes();
exports.default = exports.denticionRoutes.router;
