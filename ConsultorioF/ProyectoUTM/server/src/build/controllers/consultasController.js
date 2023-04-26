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
exports.consultaController = void 0;
const database_1 = __importDefault(require("../database"));
class ConsultasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const consulta = `SELECT * FROM consultas WHERE paciente_id = ${id}`;
            //   console.log(consulta)
            const respuesta = yield database_1.default.query(consulta);
            // console.log(respuesta);
            res.json(respuesta);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.params);
            const { id } = req.params;
            const consultas = 'SELECT * FROM consultas WHERE id_consulta=' + id;
            //console.log(consultas);
            const respuesta = yield database_1.default.query(consultas);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'usuario no encontrado' });
        });
    }
    listFecha(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fechapedida } = req.params;
            //  console.log("listFecha",fechapedida);
            const consulta = `SELECT P.nombre ,C.consulta, C.hora FROM consultas C JOIN paciente P ON (C.paciente_id=P.id_paciente)  WHERE C.fecha = '${fechapedida}'`;
            // console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            //console.log(respuesta);
            res.json(respuesta);
        });
    }
    listhora(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fecha, hora } = req.params;
            //console.log("listhora",fecha);
            //console.log("listhora",hora);
            const consulta = `SELECT C.id_consulta, C.hora ,P.nombre,C.consulta FROM consultas C JOIN paciente P ON (C.paciente_id=P.id_paciente)  WHERE C.fecha = '${fecha}' AND  C.hora='${hora}'`;
            // console.log(consulta);
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
    crear_consulta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            const resp = yield database_1.default.query("INSERT INTO consultas set ?", [req.body]);
            res.json(resp);
        });
    }
    actualizar_consulta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            //  console.log(req.params);
            const resp = yield database_1.default.query("UPDATE consultas set ? WHERE id_consulta = ?", [req.body, id]);
            res.json(resp);
        });
    }
    eliminar_consulta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM consultas WHERE id_consulta = ${id}`);
            res.json(resp);
        });
    }
}
exports.consultaController = new ConsultasController();
