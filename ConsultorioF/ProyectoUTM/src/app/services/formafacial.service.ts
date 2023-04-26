import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { FormaFacial } from '../models/formafacial';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class FormafacialService {

  constructor(private http: HttpClient) { }
   
  //obtener un solo paciente
  obtenerUnaFormafacial(id:number){
    return this.http.get(`${environment.API_URI}/api/formafacial/${id}`,{headers:headers});
  }
  //ingresar un paciente 
  IngresarFormafacial(formafacial:FormaFacial){
    return this.http.post(`${environment.API_URI}/api/formafacial/`,formafacial,{headers:headers});
  }
  //elimina un paciente
  eliminarFormafacial(id:number){
    return this.http.delete(`${environment.API_URI}/api/formafacial/elimina/${id}`,{headers:headers});
  }
  //modifica un paciente
  modificarFormafacial(formafacial:FormaFacial){
    return this.http.put(`${environment.API_URI}/api/formafacial/actualiza/${formafacial.paciente_id}`,formafacial,{headers:headers});
  }

}
