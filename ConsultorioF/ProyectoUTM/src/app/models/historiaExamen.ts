export class HistoriaExamen{
    id_examen_historia?:number;
    motivo_consulta:string;
    salud_general:string;
    cuadros_importantes:string;
    h_digital:string;
    h_lengua:string;
    h_labio:string;
    h_bruxismo:string;
    t_cara_dientes:string;
    tratamiento_ortodontico_a:string;
    sintomas:string;
    dolor:string;
    historia:string;
    paciente_id?: number;
    constructor() {    
    this.motivo_consulta='';
    this.salud_general='Buena';
    this.cuadros_importantes='';
    this.h_digital='';
    this.h_lengua='';
    this.h_labio='';
    this.h_bruxismo='';
    this.t_cara_dientes='';
    this.tratamiento_ortodontico_a='';
    this.sintomas='';
    this.dolor='';
    this.historia='';

    }
}