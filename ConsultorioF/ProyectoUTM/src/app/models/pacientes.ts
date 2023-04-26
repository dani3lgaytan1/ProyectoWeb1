export class Paciente{
    id_paciente?:number;
    nombre:string;
    lugar_de_nacimiento:string;
    domicilio: string;
    estado_civil: string;
    medico_de_cabecera: string;
    Responsable_o_tutor: string;
    fecha?:string;
    edad: number;
    sexo: string;
    ocupacion: string;
    escolaridad: string;
    telefono: string;
    telefonoPX: string;
    //usuario_id?: number;
    constructor() {
    this.id_paciente=0;
    this.nombre='';
    this.lugar_de_nacimiento='Asuncion Nochixtlan';
    this.domicilio='';
    this.estado_civil='';
    this.medico_de_cabecera='';
    this.Responsable_o_tutor='sin tutor';
    this.edad=0; 
    this.sexo='';
    this.ocupacion='';
    this.escolaridad='';
    this.telefono='';
    this.telefonoPX='';
   // this.usuario_id=1
    }
    }