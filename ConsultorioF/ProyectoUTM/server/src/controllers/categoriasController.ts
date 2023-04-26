import { Request, Response } from 'express';
import pool from '../database';
class CategoriaController {
   //funcion para listar a los usuarios 
    public async list(req: Request, res: Response): Promise<void> {
       // console.log(req.params)
        const consulta = 'SELECT rol FROM usuario';
        //console.log(consulta)
        const respuesta = await pool.query(consulta);
        //console.log(respuesta);
        res.json(respuesta);

    }

}
export const categoriaController = new CategoriaController();

