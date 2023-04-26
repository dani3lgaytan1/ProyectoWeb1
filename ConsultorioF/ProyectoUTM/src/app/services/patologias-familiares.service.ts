import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { PatologiaFamiliar } from '../models/patologiafamiliar';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class PatologiasFamiliaresService {

  constructor(private http: HttpClient) { }
   //crear una sola patologia 
  crearUnaPatologia(patologiah:PatologiaFamiliar){
    return this.http.post(`${environment.API_URI}/api/afhpatologias/`,patologiah,{headers:headers}); //ya
  }
  obtenerTablapatologiasf(id:number){ //servicio para obtener la tabla con las patologias familiares de un paciente 
    return this.http.get(`${environment.API_URI}/api/afhereditarios/${id}`,{headers:headers});//ya 
  }
  //modificar una patologia s
    //modifica un paciente
    modificarPatologia(patologiah:PatologiaFamiliar){
      return this.http.put(`${environment.API_URI}/api/afhpatologias/actualiza/${patologiah.id_patologia_afh}`,patologiah,{headers:headers}); 
    }
    ultimoIdtabla(){
      return this.http.get(`${environment.API_URI}/api/afhereditarios/ultimo/id`,{headers:headers});
    }
    obtenerUnaPatologia(id:number){
      return this.http.get(`${environment.API_URI}/api/afhpatologias/${id}`,{headers:headers}); //servicio para obtener una patologia segun su id 
    }

    eliminarUnaPatologia(id:number){
      return this.http.delete(`${environment.API_URI}/api/afhpatologias/elimina/${id}`,{headers:headers}); //ya
    }

    obtenerUnid(id:number){
      return this.http.get(`${environment.API_URI}/api/afhereditarios/paciente/${id}`,{headers:headers});//ya 
    }
}
