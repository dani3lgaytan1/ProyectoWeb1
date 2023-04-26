import { Request, Response } from 'express';
import pool from '../database';
class FormafacialController{
    public async listOne(req: Request, res: Response): Promise<void> {
       // console.log(req.params);
        const { id } = req.params;
        const consulta = 'SELECT * FROM forma_facial WHERE id_forma_facial = ' + id;
        //console.log(consulta);
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]); 
            return;
        }
        res.status(404).json({ 'mensaje': 'tabla no encontrada' });

    }
    public async listOnepaciente(req: Request, res: Response): Promise<void> { 
      //  console.log(req.params);
        const { id1 } = req.params;
        const consulta = 'SELECT * FROM forma_facial WHERE paciente_id = ' + id1;
       // console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]); 
            return;
        }
        res.status(404).json({ 'mensaje': 'tabla no encontrada' });
    }
    public async crear_formafacial(req: Request, res: Response): Promise<void> {
       // console.log(req.body);
        const resp = await pool.query("INSERT INTO forma_facial set ?",
        [req.body]);
        res.json(resp);
    }

    public async actualizar_formafacial(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
       // console.log(req.params);
        const resp = await pool.query("UPDATE forma_facial set ? WHERE paciente_id = ?", [req.body, id]);
        res.json(resp);
    }

    public async eliminar_formafacial(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM forma_facial WHERE paciente_id = ${id}`);
        res.json(resp);
    }

}
export const formafacialController = new FormafacialController();

