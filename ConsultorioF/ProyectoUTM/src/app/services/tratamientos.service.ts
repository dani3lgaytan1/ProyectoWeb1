import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Tratamiento } from '../models/tratamiento';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class TratamientosService {

  constructor(private http: HttpClient) { }
   //obtener un tratamiento segun su id 
   ObtenerUnTratamiento(id:number){
    return this.http.get(`${environment.API_URI}/api/tratamientos/${id}`,{headers:headers});
   } 
   //obtener el tratamiento de un paciente en especifico dado su id  
   obtenerTratamiento(id:number){
    return this.http.get(`${environment.API_URI}/api/tratamientos/paciente/${id}`,{headers:headers});
  }
  //obtener el saldo de un solo paciente
  obtenerSaldo(id:number){
    return this.http.get(`${environment.API_URI}/api/tratamientos/saldo/${id}`,{headers:headers});
  }
  //Crear un tratamiento
  CrearTratamiento(tratamiento:Tratamiento){
    return this.http.post(`${environment.API_URI}/api/tratamientos/`,tratamiento,{headers:headers});
  }
  //elimina un tratamiento
  eliminarTratamiento(id:number){
    return this.http.delete(`${environment.API_URI}/api/tratamientos/elimina/${id}`,{headers:headers});
  }
  //modifica un paciente
  modificarTratamiento(tratamiento:Tratamiento){
    return this.http.put(`${environment.API_URI}/api/tratamientos/actualiza/${tratamiento.id_tratamiento}`,tratamiento,{headers:headers});
  }

}
