import { Request, Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { usuarioController } from '../controllers/usuarioController';
import { validarToken } from '../middleware/auth'; //para poner seguridad en el servidor 

class UsuariosRoutes {
 
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/',validarToken,usuarioController.list);//obtener la lista de usuarios en la base de datos 
        this.router.get('/verificar/:correo/:password',validarToken,usuarioController.validar);//se cambio a post  
        this.router.get('/buscar/:correo',validarToken,usuarioController.buscar);//se cambio a post  
        this.router.get('/:id1',validarToken,usuarioController.listOne);//obtener solo un usuario dependiendo de su id
        this.router.post('/',validarToken,usuarioController.crear_usuario);//crear un nuevo usuario 
        this.router.put('/update/password',validarToken,usuarioController.actualizar_password);
        this.router.put('/update/:id',validarToken,usuarioController.actualizar_usuario);//actualizar un usuario
        this.router.delete('/delete/:id',validarToken,usuarioController.eliminar_usuario);//eliminar a un usuario
    }

}
export const usuariosRoutes = new UsuariosRoutes();

export default usuariosRoutes.router;