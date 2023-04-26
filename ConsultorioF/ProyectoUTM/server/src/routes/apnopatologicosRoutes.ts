import { Request, Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { nopatologicoController } from '../controllers/apnopatologicosController';
import { validarToken } from '../middleware/auth'; //para poner seguridad en el servidor 


class NoPatologicosRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    } 
    config(): void {
        this.router.get('/',validarToken,nopatologicoController.list);//obtener la lista de las tablas correspondientes en la base de datos 
        this.router.get('/:id1',validarToken,nopatologicoController.listOne);//obtener solo la tabla dependiendo del id del paciente
        this.router.post('/',validarToken,nopatologicoController.crear_tablanp);//crear un nueva tabla de no patologicos 
        this.router.put('/actualiza/:id',validarToken,nopatologicoController.actualizar_tablanp);//actualizar un usuario
        this.router.delete('/elimina/:id',validarToken,nopatologicoController.eliminar_tablanp);//eliminar a un usuario


    }

}
export const apnopatologicosRoutes = new NoPatologicosRoutes();

export default apnopatologicosRoutes.router;