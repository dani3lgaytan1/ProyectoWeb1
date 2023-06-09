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
exports.pacienteController = void 0;
const database_1 = __importDefault(require("../database"));
class PacienteController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.params)
            const consulta = 'SELECT * FROM paciente';
            //console.log(consulta)
            const respuesta = yield database_1.default.query(consulta);
            //console.log(respuesta);
            res.json(respuesta);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.params);
            const { id1 } = req.params;
            const consulta = 'SELECT * FROM paciente WHERE id_paciente = ' + id1;
            //console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'usuario no encontrado' });
        });
    }
    ultimoingresado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta = `SELECT MAX(id_paciente) ultimo FROM paciente`;
            //  console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length == 0) { //si se regreso  un arreglo vacio entonces se regresa null 
                res.json(null);
            }
            else {
                //    console.log(respuesta[0]);
                res.json(respuesta);
            }
        });
    }
    crear_paciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            const resp = yield database_1.default.query("INSERT INTO paciente set ?", [req.body]);
            res.json(resp);
        });
    }
    ImportarPaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let pacientes = req.body;
            //console.log("Pacientes: ",req.body);
            const resp = yield database_1.default.query("INSERT INTO paciente set ?", [pacientes]);
            res.json(resp);
        });
    }
    actualizar_paciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            //console.log(req.params);
            const resp = yield database_1.default.query("UPDATE paciente set ? WHERE id_paciente = ?", [req.body, id]);
            res.json(resp);
        });
    }
    eliminar_paciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM paciente WHERE id_paciente = ${id}`);
            res.json(resp);
        });
    }
}
exports.pacienteController = new PacienteController();
