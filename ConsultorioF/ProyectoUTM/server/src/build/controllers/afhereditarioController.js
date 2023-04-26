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
exports.hereditarioController = void 0;
const database_1 = __importDefault(require("../database"));
class HereditarioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const tratamientos = 'SELECT * FROM a_familiares_hereditarios';
            console.log(tratamientos);
            const respuesta = yield database_1.default.query(tratamientos);
            console.log(respuesta);
            res.json(respuesta);
        });
    }
    ultimo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta = `SELECT MAX(id_afh) ultimo FROM a_familiares_hereditarios`;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length == 0) { //si se regreso  un arreglo vacio entonces se regresa null 
                res.json(null);
            }
            else {
                console.log(respuesta[0]);
                res.json(respuesta);
            }
        });
    }
    obtenerid(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id1 } = req.params;
            const consulta = `SELECT id_afh FROM a_familiares_hereditarios WHERE paciente_id = ${id1}`;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length == 0) { //si se regreso  un arreglo vacio entonces se regresa null 
                res.json(null);
            }
            else {
                console.log(respuesta[0]);
                res.json(respuesta);
            }
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { id1 } = req.params;
            const tabla = `SELECT NP.nombre_f, PF.madre,PF.abuelaMaterna,PF.abueloMaterno,PF.padre,PF.abueloPaterno,PF.abuelaPaterna,PF.hermanos,PF.otros,PF.id_patologia_afh FROM a_familiares_hereditarios TH INNER JOIN patologia_a_familiares_hereditarios PF ON PF.a_familiares_id = TH.id_afh INNER JOIN n_patologiasf NP ON PF.patologia_idf = NP.id_patologiaf AND TH.paciente_id = '${id1}'`;
            console.log(tabla);
            const respuesta = yield database_1.default.query(tabla);
            console.log(respuesta);
            res.json(respuesta);
        });
    }
    crear_tablafh(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const resp = yield database_1.default.query("INSERT INTO a_familiares_hereditarios set ?", [req.body]);
            res.json(resp);
        });
    }
    actualizar_tablafh(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(req.params);
            const resp = yield database_1.default.query("UPDATE a_familiares_hereditarios set ? WHERE id_afh = ?", [req.body, id]);
            res.json(resp);
        });
    }
    eliminar_tablafh(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM a_familiares_hereditarios WHERE paciente_id = ${id}`);
            res.json(resp);
        });
    }
}
exports.hereditarioController = new HereditarioController();
