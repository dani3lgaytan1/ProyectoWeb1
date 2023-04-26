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
exports.tratamientoController = void 0;
const database_1 = __importDefault(require("../database"));
class TratamientosController {
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.params);
            const { id } = req.params;
            const tratamientos = 'SELECT * FROM tratamientos WHERE id_tratamiento=' + id;
            //console.log(tratamientos);
            const respuesta = yield database_1.default.query(tratamientos);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'usuario no encontrado' });
        });
    }
    listratamientos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.params);
            const { id1 } = req.params;
            const consulta = 'SELECT id_tratamiento,fecha,tratamiento,costo,pago FROM tratamientos WHERE paciente_id = ' + id1;
            //console.log(consulta)
            const respuesta = yield database_1.default.query(consulta);
            //console.log(respuesta);
            res.json(respuesta);
        });
    }
    saldo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.params);
            const { id2 } = req.params;
            const consulta = "SELECT SUM(costo) - SUM(pago) as Saldo FROM tratamientos WHERE paciente_id= " + id2;
            //console.log(consulta)
            const respuesta = yield database_1.default.query(consulta);
            res.json(respuesta);
        });
    }
    crear_tratamiento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            const resp = yield database_1.default.query("INSERT INTO tratamientos set ?", [req.body]);
            res.json(resp);
        });
    }
    actualizar_tratamiento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            // console.log(req.params);
            const resp = yield database_1.default.query("UPDATE tratamientos set ? WHERE id_tratamiento = ?", [req.body, id]);
            res.json(resp);
        });
    }
    eliminar_tratamiento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM tratamientos WHERE id_tratamiento = ${id}`);
            res.json(resp);
        });
    }
}
exports.tratamientoController = new TratamientosController();
