export class Denticion{
    id_denticion?:number;
    fase_denticion:string;
    estado_periodontal:string;
    estado_restauracion:string;
    clasificacion_angle:string;
    resalte:string;
    mordida:string;
    paciente_id?: number;
    constructor() {    
    this.fase_denticion='';
    this.estado_periodontal='';
    this.estado_restauracion='';
    this.clasificacion_angle='';
    this.resalte='';
    this.mordida='';
    }
}