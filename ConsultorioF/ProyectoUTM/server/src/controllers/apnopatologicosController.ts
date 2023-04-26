import { Request, Response } from 'express';
import pool from '../database';
class NopatologicosController {
    public async list(req: Request, res: Response): Promise<void> {
       // console.log(req.params)
        const tratamientos = 'SELECT * FROM a_personales_nopatologico';
        //console.log(tratamientos)
        const respuesta = await pool.query(tratamientos);
        //console.log(respuesta);
        res.json(respuesta);
    }
    public async listOne(req: Request, res: Response): Promise<void> { 
        //console.log(req.params);
        const { id1 } = req.params;
        const consulta = 'SELECT * FROM a_personales_nopatologico WHERE paciente_id = ' + id1;
        //console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]); 
            return;
        }
        res.status(404).json({ 'mensaje': 'tabla no encontrada' });
    }    
    public async crear_tablanp(req: Request, res: Response): Promise<void> {
        //console.log(req.body);
        const resp = await pool.query("INSERT INTO a_personales_nopatologico set ?",
        [req.body]);
        res.json(resp);
    }

    public async actualizar_tablanp(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE a_personales_nopatologico set ? WHERE paciente_id = ?", [req.body, id]);
        res.json(resp);
    }

    public async eliminar_tablanp(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM a_personalesnopatologico WHERE paciente_id = ${id}`);
        res.json(resp);
    }



}
export const nopatologicoController = new NopatologicosController();

