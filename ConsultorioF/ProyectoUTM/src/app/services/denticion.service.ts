import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Denticion } from '../models/denticion';
import { headers } from '../models/Header';


@Injectable({
  providedIn: 'root'
})
export class DenticionService {

  constructor(private http: HttpClient) { }
  //obtener un solo paciente
  obtenerUnaDenticion(id:number){
    return this.http.get(`${environment.API_URI}/api/denticion/${id}`,{headers:headers});
  }
  
  //ingresar una denticion
  IngresarDenticion(denticion:Denticion){
    return this.http.post(`${environment.API_URI}/api/denticion/`,denticion,{headers:headers});
  }
  //elimina un paciente
  eliminarDenticion(id:number){
    return this.http.delete(`${environment.API_URI}/api/denticion/elimina/${id}`,{headers:headers});
  }
  //modifica un paciente
  modificarDenticion(denticion:Denticion){
    return this.http.put(`${environment.API_URI}/api/denticion/actualiza/${denticion.paciente_id}`,denticion,{headers:headers});
  }
}
