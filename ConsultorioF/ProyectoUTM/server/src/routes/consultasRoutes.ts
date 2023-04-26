import { Request, Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { consultaController } from '../controllers/consultasController';
import { validarToken } from '../middleware/auth'; //para poner seguridad en el servidor 


class ConsultasRoutes {
 
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/:id',validarToken,consultaController.list);
        this.router.get('/unaconsulta/:id',validarToken,consultaController.listOne);
        this.router.get('/dia/:fechapedida',validarToken,consultaController.listFecha);
        this.router.post('/',validarToken,consultaController.crear_consulta);//crear un nuevo usuario 
        this.router.put('/update/:id',validarToken,consultaController.actualizar_consulta);//actualizar un usuario
        this.router.delete('/delete/:id',validarToken,consultaController.eliminar_consulta);//eliminar a un usuario
        this.router.get('/agenda/:fecha/:hora',validarToken,consultaController.listhora);
        //this.router.get('/:id1/:id2',consultaController.listRange);
    }
  
}
export const consultasRoutes = new ConsultasRoutes();

export default consultasRoutes.router;
