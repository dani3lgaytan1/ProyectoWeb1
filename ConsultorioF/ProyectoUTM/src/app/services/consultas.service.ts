import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Consulta } from '../models/consultas';
import { headers } from '../models/Header';


@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http: HttpClient) { }

  unaConslta(id:number){
    return this.http.get(`${environment.API_URI}/api/consultas/unaconsulta/${id}`,{headers:headers});
  }
  consultaPaciente(id:number){
    return this.http.get(`${environment.API_URI}/api/consultas/${id}`,{headers:headers});
  }
  consultaDia(fecha:string){
    return this.http.get(`${environment.API_URI}/api/consultas/dia/${fecha}`,{headers:headers});
  }
  crearConsulta(consulta:Consulta){
    return this.http.post(`${environment.API_URI}/api/consultas/`,consulta,{headers:headers});  
  }
  verificarConsulta(fecha:string, hora:string){
    return this.http.get(`${environment.API_URI}/api/consultas/agenda/${fecha}/${hora}`,{headers:headers});
  }
  modificarConsulta(consulta:Consulta){
    return this.http.put(`${environment.API_URI}/api/consultas/update/${consulta.id_consulta}`,consulta,{headers:headers});        
  }
  eliminarConsulta(id:number){
    return this.http.delete(`${environment.API_URI}/api/consultas/delete/${id}`,{headers:headers});
  }
}
