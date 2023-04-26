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
exports.dientesocController = void 0;
const database_1 = __importDefault(require("../database"));
class DientesOCController {
    listdientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const tratamientos = 'SELECT * FROM dientes_oc';
            console.log(tratamientos);
            const respuesta = yield database_1.default.query(tratamientos);
            console.log(respuesta);
            res.json(respuesta);
        });
    }
    listOnediente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { id1 } = req.params;
            const consulta = 'SELECT * FROM dientes_oc  WHERE id_diente = ' + id1;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'tabla no encontrada' });
        });
    }
    crear_diente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const resp = yield database_1.default.query("INSERT INTO dientes_oc set ?", [req.body]);
            res.json(resp);
        });
    }
    actualizar_diente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(req.params);
            const resp = yield database_1.default.query("UPDATE dientes_oc set ? WHERE id_diente = ?", [req.body, id]);
            res.json(resp);
        });
    }
    eliminar_diente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM dientes_oc WHERE id_diente = ${id}`);
            res.json(resp);
        });
    }
}
exports.dientesocController = new DientesOCController();
