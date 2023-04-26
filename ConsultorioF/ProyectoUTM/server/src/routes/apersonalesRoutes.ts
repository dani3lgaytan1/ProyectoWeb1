import { Request, Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { personalesController } from '../controllers/personalesController';
import { validarToken } from '../middleware/auth'; //para poner seguridad en el servidor 

class PersonalesRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        //estas rutas son  para la tabla de hereditarios
        this.router.get('/',validarToken,personalesController .list);
        this.router.get('/:id1',validarToken,personalesController.listOne);//las patologias de un solo paciente segun el id 
        this.router.post('/',validarToken,personalesController.crear_tpersonales);//crear un nuevo usuario 
        this.router.put('/actualiza/:id',validarToken,personalesController.actualizar_tpersonales);//actualizar un usuario
        this.router.delete('/elimina/:id', validarToken,personalesController.eliminar_tpersonales);//eliminar a un usuario
        
       
    }
 
}
export const apersonalesRoutes = new PersonalesRoutes();

export default apersonalesRoutes.router;