
import { Router } from 'express';
import { categoriaController } from '../controllers/categoriasController';

class CategoriasRoutes {
 
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/', categoriaController.list);//obtener la lista de usuarios en la base de datos 

}

}
export const categoriasRoutes = new CategoriasRoutes();
export default categoriasRoutes.router;
