import { Request, Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { tratamientoController } from '../controllers/tratamientoController';
import { validarToken } from '../middleware/auth'; //para poner seguridad en el servidor 

class TratamientoRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    } 
    config(): void {
        this.router.get('/:id',validarToken,tratamientoController.listOne);
        this.router.get('/paciente/:id1',validarToken,tratamientoController.listratamientos);
        this.router.get('/saldo/:id2',validarToken,tratamientoController.saldo);
        this.router.post('/',validarToken,tratamientoController.crear_tratamiento);
        this.router.put('/actualiza/:id',validarToken,tratamientoController.actualizar_tratamiento);
        this.router.delete('/elimina/:id',validarToken,tratamientoController .eliminar_tratamiento);


    }

}
export const tratamientoRoutes = new TratamientoRoutes();

export default tratamientoRoutes.router;