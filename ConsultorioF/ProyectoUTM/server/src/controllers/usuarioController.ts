import { Request, Response } from 'express';
import pool from '../database';
import bcrypt from 'bcryptjs';
class UsuarioController {
   //funcion para listar a los usuarios 
    public async list(req: Request, res: Response): Promise<void> {
       // console.log(req.params)
        const consulta = 'SELECT * FROM usuario';
       // console.log(consulta)
        const respuesta = await pool.query(consulta);
        //console.log(respuesta);
        res.json(respuesta);
    }
    public async listOne(req: Request, res: Response): Promise<void> {
        //console.log(req.params);
        const { id1 } = req.params;
        const consulta = 'SELECT * FROM usuario WHERE id_usuario = ' + id1;
        //console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'usuario no encontrado' });
    }

    public async buscar(req: Request, res: Response): Promise<void> {
       // console.log(req.params);
        const { correo } = req.params;
        const consulta = "SELECT * FROM usuario WHERE correo = '"+correo+"'";
       // console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]); 
            return;
        }else{
            res.json(respuesta.length);
            return;
        }
    }
    public async validar(req: Request, res: Response): Promise<void> {
        const {correo,password} = req.params;
        //console.log(correo);
        let consulta="SELECT * FROM usuario WHERE correo = '"+correo+"'";
        //console.log(consulta);
        const respuesta= await pool.query(consulta);
        //console.log(respuesta);
        if (respuesta.length>0 ){ //si se regreso  un arreglo vacio entonces se regresa null 
            bcrypt.compare(password,respuesta[0].password,(err,resEncriptar)=>{
                    if (resEncriptar==true) {
                        res.json(respuesta)
                    } else {
                        res.json(-1);
                    }
                    return;
            });
        }else{
            res.json(-1);          
        }
    }

    public async crear_usuario(req: Request, res: Response): Promise<void> {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        try {
            const resp = await pool.query("INSERT INTO usuario set ?",[req.body]);
             res.json(resp);
        } catch (error) {
            console.log(error);
        }
    }
    public async actualizar_usuario(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
       // console.log(req.params);
        const resp = await pool.query("UPDATE usuario set ? WHERE id_usuario = ?", [req.body, id]);
        res.json(resp);
    }

    public async actualizar_password(req: Request, res: Response): Promise<void> {
        //console.log("recibida: ",req.body.password);
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        //console.log("encriptada: ",req.body.password);
        let correo = req.body.correo;
        //console.log(req.body);
        try {
            const resp = await pool.query("UPDATE usuario set password = '"+req.body.password+"' WHERE correo = '"+correo+"' ");
            res.json(resp);
            
        } catch (error) {
            console.log(error);
        }
    }


    public async eliminar_usuario(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM usuario WHERE id_usuario = ${id}`);
        res.json(resp);
    }

}
export const usuarioController = new UsuarioController();

