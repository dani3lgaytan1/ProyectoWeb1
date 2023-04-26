import { Request, Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { formafacialController } from '../controllers/FormaFacialController';
import { validarToken } from '../middleware/auth'; //para poner seguridad en el servidor 

class FormaFacialRoutes{

    public router: Router = Router();
    constructor() {
        this.config();
    } 
    config(): void {
        this.router.get('/one/:id',validarToken,formafacialController.listOne);
        this.router.get('/:id1',validarToken,formafacialController.listOnepaciente);
        this.router.post('/',validarToken,formafacialController.crear_formafacial);
        this.router.put('/actualiza/:id',validarToken,formafacialController.actualizar_formafacial);
        this.router.delete('/elimina/:id',validarToken,formafacialController.eliminar_formafacial);


    }

}
export const FormafacialRoutes = new FormaFacialRoutes();

export default FormafacialRoutes.router;