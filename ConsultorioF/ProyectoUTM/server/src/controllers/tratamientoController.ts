import { Request, Response } from 'express';
import pool from '../database';
class TratamientosController {
    public async listOne(req: Request, res: Response): Promise<void> {
       // console.log(req.params);
        const {id}= req.params;

        const tratamientos = 'SELECT * FROM tratamientos WHERE id_tratamiento='+id;
        //console.log(tratamientos);
        const respuesta = await pool.query(tratamientos);
        if (respuesta.length > 0) {
            res.json(respuesta[0]); 
            return;
        }
        res.status(404).json({ 'mensaje': 'usuario no encontrado' });


    }
    public async listratamientos(req: Request, res: Response): Promise<void> {
        //console.log(req.params);
        const { id1 } = req.params;
        const consulta = 'SELECT id_tratamiento,fecha,tratamiento,costo,pago FROM tratamientos WHERE paciente_id = ' + id1;
        //console.log(consulta)
        const respuesta = await pool.query(consulta);
        //console.log(respuesta);
        res.json(respuesta);
    }

    public async saldo(req: Request, res: Response): Promise<void> {
        //console.log(req.params);
        const { id2 } = req.params;
        const consulta =  "SELECT SUM(costo) - SUM(pago) as Saldo FROM tratamientos WHERE paciente_id= " +id2;
        //console.log(consulta)
        const respuesta = await pool.query(consulta);
        res.json(respuesta)
    }

    
    public async crear_tratamiento(req: Request, res: Response): Promise<void> {
        //console.log(req.body);
        const resp = await pool.query("INSERT INTO tratamientos set ?",
        [req.body]);
        res.json(resp);
    }

    public async actualizar_tratamiento(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
       // console.log(req.params);
        const resp = await pool.query("UPDATE tratamientos set ? WHERE id_tratamiento = ?", [req.body, id]);
        res.json(resp);
    }

    public async eliminar_tratamiento(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM tratamientos WHERE id_tratamiento = ${id}`);
        res.json(resp);
    }



}
export const tratamientoController = new TratamientosController();

