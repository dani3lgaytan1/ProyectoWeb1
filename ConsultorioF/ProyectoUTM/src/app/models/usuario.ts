export class Usuario{
    id_usuario?:number;
    nombre:string;
    rol:number;
    correo: string;
    password: string;
    constructor() {
    this.id_usuario=1;
    this.nombre='';
    this.rol=2;
    this.correo = '';
    this.password = '';
    }
    }