import { Request, Response } from 'express';
import pool from '../database';
class PersonalespatologiasController{


    public async listOne(req: Request, res: Response): Promise<void> { 
        //console.log(req.params);
        const { id } = req.params;
        const consulta = 'SELECT id_app FROM  a_personales_patologicos  WHERE paciente_id = ' + id;
        //console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]); 
            return;
        }
        res.status(404).json({ 'mensaje': 'tabla no encontrada' });
    }
 

    public async listpatologias(req: Request, res: Response): Promise<void> {
        console.log(req.params)
        const tratamientos = 'SELECT * FROM patologia_a_personales_p';
        console.log(tratamientos)
        const respuesta = await pool.query(tratamientos);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async listOnepatologia(req: Request, res: Response): Promise<void> { 
        console.log(req.params);
        const { id1 } = req.params;
        const consulta = 'SELECT * FROM patologia_a_personales_p  WHERE id_patologia_app = ' + id1;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]); 
            return;
        }
        res.status(404).json({ 'mensaje': 'tabla no encontrada' });
    }

     
    public async crear_patologia(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const resp = await pool.query("INSERT INTO patologia_a_personales_p set ?",
        [req.body]);
        res.json(resp);
    }

    public async actualizar_patologia(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE patologia_a_personales_p set ? WHERE id_patologia_app = ?", [req.body, id]);
        res.json(resp);
    }

    public async eliminar_patologia(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM patologia_a_personales_p WHERE id_patologia_app = ${id}`);
        res.json(resp);
    }
}
export const patologiasAPController = new PersonalespatologiasController();

