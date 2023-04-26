"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const UsuarioRoutes_1 = __importDefault(require("./routes/UsuarioRoutes"));
const pacientesRoutes_1 = __importDefault(require("./routes/pacientesRoutes"));
const consultasRoutes_1 = __importDefault(require("./routes/consultasRoutes"));
const tratamientoRoutes_1 = __importDefault(require("./routes/tratamientoRoutes"));
const apnopatologicosRoutes_1 = __importDefault(require("./routes/apnopatologicosRoutes"));
const FormafacialRoutes_1 = __importDefault(require("./routes/FormafacialRoutes"));
const denticionRoutes_1 = __importDefault(require("./routes/denticionRoutes"));
const historiaeRoutes_1 = __importDefault(require("./routes/historiaeRoutes"));
const afhereditariosRoutes_1 = __importDefault(require("./routes/afhereditariosRoutes"));
const patologiasHRoutes_1 = __importDefault(require("./routes/patologiasHRoutes"));
const categoriasRoutes_1 = __importDefault(require("./routes/categoriasRoutes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)(); //ejecutar servidor 
        this.config();
        this.routes();
        this.app.use('/documentacion', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/pacientes', pacientesRoutes_1.default);
        this.app.use('/api/usuarios', UsuarioRoutes_1.default);
        this.app.use('/api/consultas', consultasRoutes_1.default);
        this.app.use('/api/tratamientos', tratamientoRoutes_1.default);
        this.app.use('/api/apnopatologicos', apnopatologicosRoutes_1.default); //ruta que se dirige la tabla de antecedentes // personales no patologicos 
        this.app.use('/api/denticion', denticionRoutes_1.default);
        this.app.use('/api/formafacial', FormafacialRoutes_1.default);
        this.app.use('/api/historiaexamen', historiaeRoutes_1.default);
        this.app.use('/api/afhereditarios', afhereditariosRoutes_1.default);
        this.app.use('/api/afhpatologias', patologiasHRoutes_1.default);
        this.app.use('/api/categorias', categoriasRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en el puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
