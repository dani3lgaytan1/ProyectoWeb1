import { Request, Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { hereditarioController } from '../controllers/afhereditarioController';
import { validarToken } from '../middleware/auth'; //para poner seguridad en el servidor 

class HereditarioRoutes {

    public router: Router = Router();
    constructor() {
        this.config(); 
    }
    config(): void {
        this.router.get('/ultimo/id',validarToken, hereditarioController.ultimo);
        this.router.get('/paciente/:id1',validarToken,hereditarioController.obtenerid);
        this.router.get('/:id1',validarToken,hereditarioController.listOne);//las patologias de un solo paciente segun el id 
        this.router.post('/',validarToken,hereditarioController.crear_tablafh);//crear un nuevo usuario 
        this.router.put('/actualiza/:id',validarToken,hereditarioController.actualizar_tablafh);//actualizar un usuari
        this.router.put('/delete/:id',validarToken,hereditarioController.eliminar_tablafh);//actualizar un usuari
    }
 
}
export const afhereditariosRoutes = new HereditarioRoutes();

export default afhereditariosRoutes.router;