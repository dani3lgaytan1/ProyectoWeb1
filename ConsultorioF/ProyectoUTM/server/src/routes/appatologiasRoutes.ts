import { Request, Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { patologiasAPController } from '../controllers/patologiasAPController';

class PatologiasPRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        //los que vienen despues son para ingresar las patologias hereditarias
        this.router.get('/', patologiasAPController.listpatologias);
        this.router.get('/:id', patologiasAPController.listOne);
        this.router.get('/:id1',patologiasAPController.listOnepatologia);//una patologias segun su id 
        this.router.post('/',patologiasAPController.crear_patologia);//crear un nuevo usuario 
        this.router.put('/actualiza/:id',patologiasAPController.actualizar_patologia);//actualizar un usuario
        this.router.delete('/elimina/:id', patologiasAPController.eliminar_patologia);//eliminar a un usuario
       
    }
 
}
export const appatologiasRoutes = new PatologiasPRoutes();

export default appatologiasRoutes.router;