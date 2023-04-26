export class PatologiaFamiliar{
    id_patologia_afh?:number;
    madre:number
    abuelaMaterna:number;
    abueloMaterno:number;
    padre:number;
    abuelaPaterna:number;
    abueloPaterno:number;
    hermanos:number;
    otros:number;
    a_familiares_id?:number;//relacion entre el paciente y su correspondiente tabla 
    patologia_idf?: number; //nombre de  la patologia id 
    nombre_f?:string;
    constructor() {
    this.madre=0;
    this.abuelaMaterna=0;
    this.abueloMaterno=0;
    this.padre=0;
    this.abueloPaterno=0;
    this.abuelaPaterna=0;
    this.hermanos=0;
    this.otros=0;
    }
}