"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioController = void 0;
const database_1 = __importDefault(require("../database"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UsuarioController {
    //funcion para listar a los usuarios 
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.params)
            const consulta = 'SELECT * FROM usuario';
            // console.log(consulta)
            const respuesta = yield database_1.default.query(consulta);
            //console.log(respuesta);
            res.json(respuesta);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.params);
            const { id1 } = req.params;
            const consulta = 'SELECT * FROM usuario WHERE id_usuario = ' + id1;
            //console.log(consulta)
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'usuario no encontrado' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.params);
            const { correo } = req.params;
            const consulta = "SELECT * FROM usuario WHERE correo = '" + correo + "'";
            // console.log(consulta)
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            else {
                res.json(respuesta.length);
                return;
            }
        });
    }
    validar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { correo, password } = req.params;
            //console.log(correo);
            let consulta = "SELECT * FROM usuario WHERE correo = '" + correo + "'";
            //console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            //console.log(respuesta);
            if (respuesta.length > 0) { //si se regreso  un arreglo vacio entonces se regresa null 
                bcryptjs_1.default.compare(password, respuesta[0].password, (err, resEncriptar) => {
                    if (resEncriptar == true) {
                        res.json(respuesta);
                    }
                    else {
                        res.json(-1);
                    }
                    return;
                });
            }
            else {
                res.json(-1);
            }
        });
    }
    crear_usuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcryptjs_1.default.genSalt(10);
            req.body.password = yield bcryptjs_1.default.hash(req.body.password, salt);
            try {
                const resp = yield database_1.default.query("INSERT INTO usuario set ?", [req.body]);
                res.json(resp);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    actualizar_usuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            // console.log(req.params);
            const resp = yield database_1.default.query("UPDATE usuario set ? WHERE id_usuario = ?", [req.body, id]);
            res.json(resp);
        });
    }
    actualizar_password(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log("recibida: ",req.body.password);
            const salt = yield bcryptjs_1.default.genSalt(10);
            req.body.password = yield bcryptjs_1.default.hash(req.body.password, salt);
            //console.log("encriptada: ",req.body.password);
            let correo = req.body.correo;
            //console.log(req.body);
            try {
                const resp = yield database_1.default.query("UPDATE usuario set password = '" + req.body.password + "' WHERE correo = '" + correo + "' ");
                res.json(resp);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    eliminar_usuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM usuario WHERE id_usuario = ${id}`);
            res.json(resp);
        });
    }
}
exports.usuarioController = new UsuarioController();
