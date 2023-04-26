import { Request, Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { historiaExamenController } from '../controllers/HistoriaEController';
import { validarToken } from '../middleware/auth'; //para poner seguridad en el servidor 

class HistoriaExamenRoutes{

    public router: Router = Router();
    constructor() {
        this.config();
    } 
    config(): void {
        this.router.get('/:id1',validarToken,historiaExamenController.listOnepaciente);
        this.router.post('/',validarToken,historiaExamenController.crear_historiaE);
        this.router.put('/actualiza/:id',validarToken,historiaExamenController.actualizar_historiaE);
        this.router.delete('/elimina/:id',validarToken,historiaExamenController.eliminar_historiaE);
    }

}
export const historiaexamenRoutes = new HistoriaExamenRoutes();

export default historiaexamenRoutes.router;