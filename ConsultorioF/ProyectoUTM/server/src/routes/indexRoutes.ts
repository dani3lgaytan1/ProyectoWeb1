import { Router } from 'express';
import { validarToken } from '../middleware/auth'; //para poner seguridad en el servidor 

class IndexRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
this.router.get('/',validarToken,(req,res) => res.send('Sistema del consultorio'));
}
}
const indexRoutes= new IndexRoutes();
export default indexRoutes.router;