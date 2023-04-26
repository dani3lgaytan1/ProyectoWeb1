import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { PersonalesNP } from '../models/personalesnp';
import { headers } from '../models/Header';


@Injectable({ 
  providedIn: 'root'
})
export class NopatologicosService {
  constructor(private http: HttpClient) { }
  //obtener un solo paciente
  obtenerUnaPNP(id:number){
    return this.http.get(`${environment.API_URI}/api/apnopatologicos/${id}`,{headers:headers});
  }
  //ingresar un paciente 
  IngresarPNP(personalesnp:PersonalesNP){
    return this.http.post(`${environment.API_URI}/api/apnopatologicos/`,personalesnp,{headers:headers});
  }
  //elimina un paciente
  eliminarPNP(id:number){
    return this.http.delete(`${environment.API_URI}/api/apnopatologicos/elimina/${id}`,{headers:headers});
  }
  //modifica un paciente
  modificarPNP(personalesnp:PersonalesNP){
    return this.http.put(`${environment.API_URI}/api/apnopatologicos/actualiza/${personalesnp.paciente_id}`,personalesnp,{headers:headers});
  }
}
