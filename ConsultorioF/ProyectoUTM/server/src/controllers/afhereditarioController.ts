import { Request, Response } from 'express';
import pool from '../database';
class HereditarioController {
    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params)
        const tratamientos = 'SELECT * FROM a_familiares_hereditarios';
        console.log(tratamientos)
        const respuesta = await pool.query(tratamientos);
        console.log(respuesta);
        res.json(respuesta);
    }

       
    public async ultimo(req: Request, res: Response): Promise<void> {
    
        const consulta = `SELECT MAX(id_afh) ultimo FROM a_familiares_hereditarios`;
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        if (respuesta.length==0 ){ //si se regreso  un arreglo vacio entonces se regresa null 
            res.json(null);
        }else{
            console.log(respuesta[0]);
            res.json(respuesta);            
        }
    }

    public async obtenerid(req: Request, res: Response): Promise<void> {
        const { id1 } = req.params;
        const consulta = `SELECT id_afh FROM a_familiares_hereditarios WHERE paciente_id = ${id1}`;
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        if (respuesta.length==0 ){ //si se regreso  un arreglo vacio entonces se regresa null 
            res.json(null);
        }else{
            console.log(respuesta[0]);
            res.json(respuesta);            
        }
    }

   
    public async listOne(req: Request, res: Response): Promise<void> { 
        console.log(req.params);
        const { id1 } = req.params;
        const tabla = 
    `SELECT NP.nombre_f, PF.madre,PF.abuelaMaterna,PF.abueloMaterno,PF.padre,PF.abueloPaterno,PF.abuelaPaterna,PF.hermanos,PF.otros,PF.id_patologia_afh FROM a_familiares_hereditarios TH INNER JOIN patologia_a_familiares_hereditarios PF ON PF.a_familiares_id = TH.id_afh INNER JOIN n_patologiasf NP ON PF.patologia_idf = NP.id_patologiaf AND TH.paciente_id = '${id1}'`;
        console.log(tabla)
        const respuesta = await pool.query(tabla);
        console.log(respuesta);
        res.json(respuesta); 
    }
    public async crear_tablafh(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const resp = await pool.query("INSERT INTO a_familiares_hereditarios set ?",
        [req.body]);
        res.json(resp);
    }

    public async actualizar_tablafh(req: Request, res: Response): Promise<void> { 
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE a_familiares_hereditarios set ? WHERE id_afh = ?", [req.body, id]);
        res.json(resp);
    }

    public async eliminar_tablafh(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM a_familiares_hereditarios WHERE paciente_id = ${id}`);
        res.json(resp);
    }

}
export const hereditarioController = new HereditarioController();

