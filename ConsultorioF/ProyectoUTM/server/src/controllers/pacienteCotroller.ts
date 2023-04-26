import { Request, Response } from 'express';
import pool from '../database';
class PacienteController {
    public async list(req: Request, res: Response): Promise<void> {
        //console.log(req.params)
        const consulta = 'SELECT * FROM paciente';
        //console.log(consulta)
        const respuesta = await pool.query(consulta);
        //console.log(respuesta);
        res.json(respuesta);

    }
    public async listOne(req: Request, res: Response): Promise<void> {
       // console.log(req.params);
        const { id1 } = req.params;
        const consulta = 'SELECT * FROM paciente WHERE id_paciente = ' + id1;
        //console.log(consulta);
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]); 
            return;
        }
        res.status(404).json({ 'mensaje': 'usuario no encontrado' });
    }

    public async ultimoingresado(req: Request, res: Response): Promise<void> {    
        const consulta = `SELECT MAX(id_paciente) ultimo FROM paciente`;
      //  console.log(consulta);
        const respuesta = await pool.query(consulta);
        if (respuesta.length ==0 ){ //si se regreso  un arreglo vacio entonces se regresa null 
            res.json(null);
        }else{
        //    console.log(respuesta[0]);
            res.json(respuesta);            
        }
    }
 
    public async crear_paciente(req: Request, res: Response): Promise<void> {
       // console.log(req.body);
        const resp = await pool.query("INSERT INTO paciente set ?",[req.body]);
        res.json(resp);
    }

    public async ImportarPaciente(req: Request, res: Response): Promise <void> {
        let pacientes = req.body;
        //console.log("Pacientes: ",req.body);
       const  resp = await pool.query("INSERT INTO paciente set ?",[pacientes]);
        res.json(resp);
    }
    public async actualizar_paciente(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        //console.log(req.params);
        const resp = await pool.query("UPDATE paciente set ? WHERE id_paciente = ?", [req.body, id]);
        res.json(resp);
    }

    public async eliminar_paciente(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM paciente WHERE id_paciente = ${id}`);
        res.json(resp);
    }    
}
export const pacienteController = new PacienteController();

