export class FormaFacial{
    id_forma_facial?:number;
    frontal:string;
    perfil:string;
    maxilar:string;
    mandibula:string;
    labios:string;
    paciente_id?: number;
    constructor() {    
    this.frontal='';
    this.perfil='';
    this.maxilar='';
    this.mandibula='';
    this.labios='';
    }
}