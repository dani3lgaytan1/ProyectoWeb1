import { Request, Response } from 'express';
import pool from '../database';
class PersonalesController {
    public async list(req: Request, res: Response): Promise<void> {
      //  console.log(req.params)
        const tratamientos = 'SELECT * FROM a_personales_patologicos';
       // console.log(tratamientos)
        const respuesta = await pool.query(tratamientos);
        //console.log(respuesta);
        res.json(respuesta);
    }
    public async listOne(req: Request, res: Response): Promise<void> { 
        //console.log(req.params);
        const { id1 } = req.params;
        const tabla = `SELECT P.nombre_patologia,P.si_p,P.no_p,P.fechas FROM a_personales_patologicos PP JOIN patologia_a_personales_p P ON P.id_tabla_appersonales = PP.id_app AND PP.paciente_id ='${id1}'`;
        //console.log(tabla)
        const respuesta = await pool.query(tabla);
        //console.log(respuesta);
        res.json(respuesta); 
    }
    public async crear_tpersonales(req: Request, res: Response): Promise<void> {
       // console.log(req.body);
        const resp = await pool.query("INSERT INTO a_personales_patologicos set ?",
        [req.body]);
        res.json(resp);
    }

    public async actualizar_tpersonales(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
       // console.log(req.params);
        const resp = await pool.query("UPDATE a_personales_patologicos set ? WHERE id_app = ?", [req.body, id]);
        res.json(resp);
    }

    public async eliminar_tpersonales(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM a_personales_patologicos WHERE paciente_id = ${id}`);
        res.json(resp);
    }

}
export const personalesController = new PersonalesController();

