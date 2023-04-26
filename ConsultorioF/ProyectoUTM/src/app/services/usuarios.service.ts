import { Injectable } from '@angular/core';
import { Usuario } from "../models/usuario";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { headers } from '../models/Header';
@Injectable({
providedIn: 'root'
})
export class UsuariosService {
  constructor(private http: HttpClient) { }   //para acceder servicios http
  

  validar(correo:any, password:any){
    return this.http.get(`${environment.API_URI}/api/usuarios/verificar/${correo}/${password}`,{headers:headers});

  }

  
     list(){
      return this.http.get(`${environment.API_URI}/api/usuarios/`,{headers:headers});
     }
     //buscar un solo usuario
    buscarUnUsuario(correo:string){
      return this.http.get(`${environment.API_URI}/api/usuarios/buscar/${correo}`,{headers:headers});
    }
    //obtener un solo usuario
    obtenerUnUsuario(id:number){
      return this.http.get(`${environment.API_URI}/api/usuarios/${id}`,{headers:headers});
    }
    //ingresar un usuario
    IngresarUsuario(usuario:Usuario){
      return this.http.post(`${environment.API_URI}/api/usuarios/`,usuario,{headers:headers});
    }
    //elimina un usuario
    eliminarUsuario(id:number){
      return this.http.delete(`${environment.API_URI}/api/usuarios/delete/${id}`,{headers:headers});
    }
    //modifica un usuario 
    modificarUsuario(usuario:Usuario){
      return this.http.put(`${environment.API_URI}/api/usuarios/update/${usuario.id_usuario}`,usuario,{headers:headers});
    }
     //modifica un usuario 
     modificarPassword(usuario:Usuario){
      return this.http.put(`${environment.API_URI}/api/usuarios/update/password`,usuario,{headers:headers});
    }

  
  }
  
