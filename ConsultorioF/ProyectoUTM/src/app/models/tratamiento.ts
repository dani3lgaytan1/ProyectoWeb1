export class Tratamiento{
    id_tratamiento?:number;
    fecha?:string;
    tratamiento:string;
    paciente_id?: number;
    costo: number;
    pago:number;
    saldo?:number;
 
    constructor() {    
    this.tratamiento='';
    this.costo = 0;
    this.pago=0;
    }
}