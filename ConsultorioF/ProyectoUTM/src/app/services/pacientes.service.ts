import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Paciente } from '../models/pacientes';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private http: HttpClient) { }
  //obtener pacientes 
  obtenerPacientes(){
    return this.http.get(`${environment.API_URI}/api/pacientes/`,{headers:headers});
  }
  //obtener un solo paciente
  obtenerUnPaciente(id:number){
    return this.http.get(`${environment.API_URI}/api/pacientes/${id}`,{headers:headers});
  }
  //ingresar un paciente 
  IngresarPaciente(paciente:Paciente){
    return this.http.post(`${environment.API_URI}/api/pacientes/`,paciente,{headers:headers});
  }

  //ingresar varios pacientes 
  ImportarPacientes(pacientes:any){
    return this.http.post(`${environment.API_URI}/api/pacientes/importarPaciente`,pacientes,{headers:headers});
  }
  //elimina un paciente
  eliminarPaciente(id:number){
    return this.http.delete(`${environment.API_URI}/api/pacientes/elimina/${id}`,{headers:headers});
  }
  //modifica un paciente
  modificarPaciente(paciente:Paciente){
    return this.http.put(`${environment.API_URI}/api/pacientes/update/${paciente.id_paciente}`,paciente,{headers:headers});
  }

  ulitmoPaciente(){
    return this.http.get(`${environment.API_URI}/api/pacientes/ultimo/id`,{headers:headers});
  }
} 
