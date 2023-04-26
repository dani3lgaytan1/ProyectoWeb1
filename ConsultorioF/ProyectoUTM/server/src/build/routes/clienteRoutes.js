"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientesRoutes = void 0;
const express_1 = require("express");
const clientesController_1 = require("../controllers/clientesController");
class ClientesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', clientesController_1.clientesController.list);
        this.router.get('/:id1', clientesController_1.clientesController.listOne);
        //this.router.get('/:fechaIni/:fechaFin',clientesController.listFecha);
        this.router.get('/:id1/:id2', clientesController_1.clientesController.listRange);
    }
}
exports.clientesRoutes = new ClientesRoutes();
exports.default = exports.clientesRoutes.router;
