import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { TratamientosService } from 'src/app/services/tratamientos.service';
import { Tratamiento } from 'src/app/models/tratamiento';
import { ComunicacionService } from "../../services/comunicacion.service";
import { ExcelService  } from 'src/app/services/excel.service';
import Swal from 'sweetalert2';
import { environment } from 'src/app/environments/environment';
declare var $ : any;
@Component({
  selector: 'app-utratamiento',
  templateUrl: './utratamiento.component.html',
  styleUrls: ['./utratamiento.component.css']
})
export class UtratamientoComponent implements OnInit{
   listatratamiento: any;
   Saldo:any;
   NombrePaciente: any;
   Pacienteid:number;
   liga: string = environment.API_URI_IMAGENES;
  tratamientoActual = new Tratamiento();
  pageSize = 3;
  p = 1;

  constructor(private tratamientoService: TratamientosService,private comunicacionService:ComunicacionService,
   private excelService:ExcelService) { 
    this.Pacienteid=Number(localStorage.getItem("UltimoidTratamiento"));
    this.NombrePaciente= String(localStorage.getItem("UltimoNombreTratamiento"));

    this.comunicacionService.observador$.subscribe(
      (msg) =>
      {
        //console.log(msg);
        if(msg.componente==4){
          this.listarTratamiento();

        }
  
      }
      );


     this.listarTratamiento();


  }
  ngOnInit(): void {
   

    this.listarTratamiento();
    
    
  }


  listarTratamiento(){
    const id1= Number(localStorage.getItem("UltimoidTratamiento"));
   
    if (id1) {
      this.tratamientoService.obtenerTratamiento(id1).subscribe((res:any )=> { 
          this.listatratamiento=res;
          //console.log(this.listatratamiento);
        }, err => console.error(err));
    }
    this.saldopaciente(id1);  
  }
  saldopaciente(id:number){
    this.tratamientoService.obtenerSaldo(id) .subscribe(
      res => {
        {
          this.Saldo=res;
         // console.log(this.Saldo);
        }
      }, err => console.error(err));

  }
   mostrarFormularioTratamiento(id:number){
   // console.log('editarCliente', id);
    //console.log(this.tratamientoActual);
    this.tratamientoService.ObtenerUnTratamiento(id).subscribe((resClientes: any) => {
      //console.log(resClientes);
      this.tratamientoActual = resClientes;
      $('#modalmodificarTratamiento').modal();
      $('#modalmodificarTratamiento').modal("open");
      //console.log(this.tratamientoActual);
 
      },(err: any) => console.error(err)
    );
  }
  modificart(){
    this.Pacienteid=Number(localStorage.getItem("UltimoidTratamiento"));
    this.tratamientoService.modificarTratamiento(this.tratamientoActual).subscribe(
      res => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Informacion del tratamiento modificada con exito",
          showConfirmButton: true
        });
        this.tratamientoService.obtenerTratamiento(this.Pacienteid).subscribe((res:any )=> { 
          this.listatratamiento=res;
          //console.log(this.listatratamiento);
        }, err => console.error(err));
        this.saldopaciente(this.Pacienteid);
         
       }, err => console.error(err));
  }

  eliminartratamiento(id: number) {
    this.tratamientoService.eliminarTratamiento(id).subscribe(
      res => {
        {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Tratamiento eliminado con exito",
            showConfirmButton: true
          });
          this.ngOnInit();
          

        }
      }, err => console.error(err));
  }


  exportratamiento() {
    const nombreExcel =   this.NombrePaciente+'Tratamiento';//obtener el nombre del paciente y concatenar Tratamiento
    let element = document.getElementById('TablaTratamiento');
    this.excelService.exportAsExcelFile(element,nombreExcel);
  }

 
}
