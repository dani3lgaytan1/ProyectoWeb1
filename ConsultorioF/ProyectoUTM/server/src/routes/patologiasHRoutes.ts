import { Request, Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { patologiasHController } from '../controllers/patologiasHController';
import { validarToken } from '../middleware/auth'; //para poner seguridad en el servidor 


class HereditarioRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        //los que vienen despues son para ingresar las patologias hereditarias
        this.router.get('/',validarToken,patologiasHController.listpatologias);
        this.router.get('/:id1',validarToken,patologiasHController.listOnepatologia);//una patologias segun su id 
        this.router.post('/',validarToken,patologiasHController.crear_patologia);//crear un nuevo usuario 
        this.router.put('/actualiza/:id',validarToken,patologiasHController.actualizar_patologia);//actualizar un usuario
        this.router.delete('/elimina/:id',validarToken,patologiasHController.eliminar_patologia);//eliminar a un usuario
       
    }
 
}
export const afhpatologiasRoutes = new HereditarioRoutes();

export default afhpatologiasRoutes.router;