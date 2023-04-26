export class Consulta{
    id_consulta?:number;
    fecha:string;
    hora:string;
    paciente_id?: number;
    consulta: string;
    nombre?:string;
    constructor() {
    this.consulta = '';
    this.fecha='';
    this.hora='';
    }
    }