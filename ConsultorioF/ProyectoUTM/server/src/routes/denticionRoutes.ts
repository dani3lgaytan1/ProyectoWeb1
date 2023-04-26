import { Request, Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { denticionController } from '../controllers/denticionController';
import { validarToken } from '../middleware/auth'; //para poner seguridad en el servidor 

class DenticionRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    } 
    config(): void {
        this.router.get('/one/:id',validarToken,denticionController.listOne);
        this.router.get('/:id1',validarToken,denticionController.listOnepaciente);
        this.router.post('/',validarToken,denticionController.crear_denticion);
        this.router.put('/actualiza/:id',validarToken,denticionController.actualizar_denticion);
        this.router.delete('/elimina/:id',validarToken,denticionController .eliminar_denticion);
    }

}
export const denticionRoutes = new DenticionRoutes();

export default denticionRoutes.router;