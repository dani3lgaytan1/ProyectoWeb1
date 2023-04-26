import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import usuarioRoutes from './routes/UsuarioRoutes';
import pacienteRoutes from './routes/pacientesRoutes';
import consultaRoutes from './routes/consultasRoutes';
import tratamientoRoutes from './routes/tratamientoRoutes';
import apnopatologicosRoutes from './routes/apnopatologicosRoutes';
import FormafacialRoutes from './routes/FormafacialRoutes';
import denticionRoutes from './routes/denticionRoutes';
import historiaexamenRoutes from './routes/historiaeRoutes';
import afhereditariosRoutes from './routes/afhereditariosRoutes';
import afhpatologiasRoutes from './routes/patologiasHRoutes';   
import categoriasRoutes from   './routes/categoriasRoutes';   
import swagger_ui_express from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import morgan from 'morgan';
import cors from 'cors';
class Server {
    public app: Application;//variable de control
    constructor() {
        this.app = express();//ejecutar servidor 
        this.config();
        this.routes();
        this.app.use('/documentacion', swagger_ui_express.serve, swagger_ui_express.setup(swaggerDocument));}
    config(): void //definir propiedades del servidor 
     {//  como lo son el puerto, 
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }
    routes(): void {
        this.app.use(indexRoutes);
        this.app.use('/api/pacientes', pacienteRoutes);
        this.app.use('/api/usuarios', usuarioRoutes);
        this.app.use('/api/consultas', consultaRoutes);
        this.app.use('/api/tratamientos',tratamientoRoutes);
        this.app.use('/api/apnopatologicos',apnopatologicosRoutes); //ruta que se dirige la tabla de antecedentes // personales no patologicos 
        this.app.use('/api/denticion',denticionRoutes);
        this.app.use('/api/formafacial',FormafacialRoutes);
        this.app.use('/api/historiaexamen',historiaexamenRoutes);
        this.app.use('/api/afhereditarios',afhereditariosRoutes);
        this.app.use('/api/afhpatologias',afhpatologiasRoutes);
        this.app.use('/api/categorias',categoriasRoutes);}
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en el puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();