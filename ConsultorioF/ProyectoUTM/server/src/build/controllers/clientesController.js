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
exports.clientesController = void 0;
const database_1 = __importDefault(require("../database"));
class ClientesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const consulta = 'SELECT * FROM usuario';
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            console.log(respuesta);
            res.json(respuesta);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { id1 } = req.params;
            const consulta = 'SELECT * FROM cliente WHERE id = ' + id1;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'Cliente no encontrado' });
        });
    }
    listRange(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("listRange");
            const { id1, id2 } = req.params;
            console.log(id1, id2);
            const consulta = 'SELECT * FROM cliente WHERE id >= ' + id1 + ' and id<=' + id2;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
        });
    }
    listFecha(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("listFecha");
            const { fechaIni, fechaFin } = req.params;
            const consulta = `SELECT * FROM cliente WHERE fechaIni >= ${fechaIni} and fechaFin <= ${fechaFin}`;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            res.json(respuesta);
        });
    }
}
exports.clientesController = new ClientesController();
