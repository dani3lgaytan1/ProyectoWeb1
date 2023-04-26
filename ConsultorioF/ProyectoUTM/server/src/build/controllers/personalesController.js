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
exports.personalesController = void 0;
const database_1 = __importDefault(require("../database"));
class PersonalesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //  console.log(req.params)
            const tratamientos = 'SELECT * FROM a_personales_patologicos';
            // console.log(tratamientos)
            const respuesta = yield database_1.default.query(tratamientos);
            //console.log(respuesta);
            res.json(respuesta);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.params);
            const { id1 } = req.params;
            const tabla = `SELECT P.nombre_patologia,P.si_p,P.no_p,P.fechas FROM a_personales_patologicos PP JOIN patologia_a_personales_p P ON P.id_tabla_appersonales = PP.id_app AND PP.paciente_id ='${id1}'`;
            //console.log(tabla)
            const respuesta = yield database_1.default.query(tabla);
            //console.log(respuesta);
            res.json(respuesta);
        });
    }
    crear_tpersonales(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            const resp = yield database_1.default.query("INSERT INTO a_personales_patologicos set ?", [req.body]);
            res.json(resp);
        });
    }
    actualizar_tpersonales(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            // console.log(req.params);
            const resp = yield database_1.default.query("UPDATE a_personales_patologicos set ? WHERE id_app = ?", [req.body, id]);
            res.json(resp);
        });
    }
    eliminar_tpersonales(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM a_personales_patologicos WHERE paciente_id = ${id}`);
            res.json(resp);
        });
    }
}
exports.personalesController = new PersonalesController();
