"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuariosRoutes = void 0;
const express_1 = require("express");
const usuarioController_1 = require("../controllers/usuarioController");
const auth_1 = require("../middleware/auth"); //para poner seguridad en el servidor 
class UsuariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', auth_1.validarToken, usuarioController_1.usuarioController.list); //obtener la lista de usuarios en la base de datos 
        this.router.get('/verificar/:correo/:password', auth_1.validarToken, usuarioController_1.usuarioController.validar); //se cambio a post  
        this.router.get('/buscar/:correo', auth_1.validarToken, usuarioController_1.usuarioController.buscar); //se cambio a post  
        this.router.get('/:id1', auth_1.validarToken, usuarioController_1.usuarioController.listOne); //obtener solo un usuario dependiendo de su id
        this.router.post('/', auth_1.validarToken, usuarioController_1.usuarioController.crear_usuario); //crear un nuevo usuario 
        this.router.put('/update/password', auth_1.validarToken, usuarioController_1.usuarioController.actualizar_password);
        this.router.put('/update/:id', auth_1.validarToken, usuarioController_1.usuarioController.actualizar_usuario); //actualizar un usuario
        this.router.delete('/delete/:id', auth_1.validarToken, usuarioController_1.usuarioController.eliminar_usuario); //eliminar a un usuario
    }
}
exports.usuariosRoutes = new UsuariosRoutes();
exports.default = exports.usuariosRoutes.router;
