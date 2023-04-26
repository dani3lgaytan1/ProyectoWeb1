import { Request, Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { pacienteController } from '../controllers/pacienteCotroller';
import { validarToken } from '../middleware/auth'; //para poner seguridad en el servidor 


class PacienteRoutes {
    
    public router: Router = Router();
    constructor() {
        this.config();
    } 
    config(): void {
        this.router.get('/',validarToken,pacienteController.list);//obtener la lista de usuarios en la base de datos 
        this.router.get('/:id1',validarToken,pacienteController.listOne);//obtener solo un usuario dependiendo de su id
        this.router.get('/ultimo/id',validarToken,pacienteController.ultimoingresado);
        this.router.post('/',validarToken,pacienteController.crear_paciente);//crear un nuevo usuario 
        this.router.post('/importarPaciente',validarToken,pacienteController.ImportarPaciente);//ingresae varios pacientes importados 
        this.router.put('/update/:id',validarToken,pacienteController.actualizar_paciente);//actualizar un usuario
        this.router.delete('/elimina/:id',validarToken,pacienteController.eliminar_paciente);//eliminar a un usuario
    }

}
export const pacientesRoutes = new PacienteRoutes();

export default pacientesRoutes.router;