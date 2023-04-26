import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { HistoriaExamen } from '../models/historiaExamen';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class HistoriaExamenService {

  constructor(private http: HttpClient) { }
    //obtener un solo paciente
    obtenerUnaHistoria(id:number){
      return this.http.get(`${environment.API_URI}/api/historiaexamen/${id}`,{headers:headers});
    }
    //ingresar un paciente 
    IngresarHistoria(historia:HistoriaExamen){
      return this.http.post(`${environment.API_URI}/api/historiaexamen/`,historia,{headers:headers});
    }
    //elimina un paciente
    eliminarHistoria(id:number){
      return this.http.delete(`${environment.API_URI}/api/historiaexamen/elimina/${id}`,{headers:headers});
    }
    //modifica un paciente
    modificarHistoria(historia:HistoriaExamen){
      return this.http.put(`${environment.API_URI}/api/historiaexamen/actualiza/${historia.paciente_id}`,historia,{headers:headers});
    }
}
