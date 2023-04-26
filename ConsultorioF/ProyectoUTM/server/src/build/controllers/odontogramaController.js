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
exports.odontogramaController = void 0;
const database_1 = __importDefault(require("../database"));
class OdontogramaController {
    listOC(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const tratamientos = 'SELECT * FROM odontograma_clinico';
            console.log(tratamientos);
            const respuesta = yield database_1.default.query(tratamientos);
            console.log(respuesta);
            res.json(respuesta);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { id1 } = req.params;
            const tabla = `SELECT D.OD_nombre,D.numero_od,D.descripcion FROM odontograma_clinico OC JOIN dientes_oc D ON OC.id_odontograma_clinico = D.id_odontograma_tabla AND OC.paciente_id ='${id1}'`;
            console.log(tabla);
            const respuesta = yield database_1.default.query(tabla);
            console.log(respuesta);
            res.json(respuesta);
        });
    }
    crear_tablaOC(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const resp = yield database_1.default.query("INSERT INTO odontograma_clinico set ?", [req.body]);
            res.json(resp);
        });
    }
    actualizar_tablaOC(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(req.params);
            const resp = yield database_1.default.query("UPDATE odontograma_clinico set ? WHERE id_odontograma_clinico = ?", [req.body, id]);
            res.json(resp);
        });
    }
    eliminar_tablaOC(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM odontograma_clinico WHERE paciente_id = ${id}`);
            res.json(resp);
        });
    }
}
exports.odontogramaController = new OdontogramaController();
