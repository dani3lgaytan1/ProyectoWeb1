import { Request, Response } from 'express';
import pool from '../database';
class ConsultasController {
    public async list(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const consulta = `SELECT * FROM consultas WHERE paciente_id = ${id}`;
     //   console.log(consulta)
        const respuesta = await pool.query(consulta);
       // console.log(respuesta);
        res.json(respuesta);
    }
    public async listOne(req: Request, res: Response): Promise<void> {
        //console.log(req.params);
        const {id}= req.params;

        const consultas = 'SELECT * FROM consultas WHERE id_consulta='+id;
        //console.log(consultas);
        const respuesta = await pool.query(consultas);
        if (respuesta.length > 0) {
            res.json(respuesta[0]); 
            return;
        }
        res.status(404).json({ 'mensaje': 'usuario no encontrado' });
    }
    public async listFecha(req: Request, res: Response): Promise<void> {
        const { fechapedida } = req.params;
      //  console.log("listFecha",fechapedida);
        const consulta = `SELECT P.nombre ,C.consulta, C.hora FROM consultas C JOIN paciente P ON (C.paciente_id=P.id_paciente)  WHERE C.fecha = '${fechapedida}'`;
       // console.log(consulta);
        const respuesta = await pool.query(consulta);
        //console.log(respuesta);
        res.json(respuesta);
    }
    public async listhora(req: Request, res: Response): Promise<void> {
        const { fecha,hora } = req.params;
        //console.log("listhora",fecha);
        //console.log("listhora",hora);

        const consulta = `SELECT C.id_consulta, C.hora ,P.nombre,C.consulta FROM consultas C JOIN paciente P ON (C.paciente_id=P.id_paciente)  WHERE C.fecha = '${fecha}' AND  C.hora='${hora}'`;
       // console.log(consulta);
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]); 
            return;
        }else{
            res.json(respuesta.length);
            return;
        }
    }

    public async crear_consulta(req: Request, res: Response): Promise<void> {
       // console.log(req.body);
        const resp = await pool.query("INSERT INTO consultas set ?",
        [req.body]);
        res.json(resp);
    }

    public async actualizar_consulta(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
      //  console.log(req.params);
        const resp = await pool.query("UPDATE consultas set ? WHERE id_consulta = ?", [req.body, id]);
        res.json(resp);
    }

    public async eliminar_consulta(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM consultas WHERE id_consulta = ${id}`);
        res.json(resp);
    }



}
export const consultaController = new ConsultasController();

