import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ConsultasService } from 'src/app/services/consultas.service';
import { Consulta } from 'src/app/models/consultas';
import { ComunicacionService } from "../../services/comunicacion.service";
import { ExcelService  } from 'src/app/services/excel.service';
import Swal from 'sweetalert2';
import { environment } from 'src/app/environments/environment';
declare var $ : any;
@Component({
  selector: 'app-uconsulta',
  templateUrl: './uconsulta.component.html',
  styleUrls: ['./uconsulta.component.css']
})
export class UconsultaComponent  {
  listaConsulta: any;
  consulta1 = new Consulta();
  CPacienteid:number;
  NombrePacienteConsulta: any;
  liga: string = environment.API_URI_IMAGENES;
  pageSize = 5;
  p = 1;
  
  constructor(private consultasService: ConsultasService,private comunicacionService:ComunicacionService,
    private excelService: ExcelService ,
    private activer:ActivatedRoute) {
    this.CPacienteid=Number(localStorage.getItem("UltimoidConsulta"));
    this.NombrePacienteConsulta= String(localStorage.getItem("UltimoNombreConsulta"));

    //si hay un mensaje 
    this.comunicacionService.observador$.subscribe(
      (msg) =>
      {
        //console.log(msg);//imprimir el mensaje 
        if(msg.componente==3){ //Si el mensaje es 3 entonces corresponde a las consultas
          this.consultasService.consultaPaciente(this.CPacienteid).subscribe((resC: any) => {
            //console.log(resC);
          this.listaConsulta = resC;
          },
            (err: any) => console.error(err));
        }
      }
      );
  //si no se ah agregado nada un asi se lista las consultas existentes 
    //console.log(this.CPacienteid);
    if (this.CPacienteid) {
      this.consultasService.consultaPaciente(this.CPacienteid).subscribe((res:any )=> { 
          this.listaConsulta=res;
      //    console.log(this.listaConsulta);
        }, err => console.error(err));
    }
   }

  eliminarconsulta(id: number) {
    this.consultasService.eliminarConsulta(id).subscribe(
      res => {
        {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Consulta eliminada con exito",
            showConfirmButton: true
          });
          //this.ngOnInit();
        }
      }, err => console.error(err));
  }


  mostrarFormularioConsulta(id:number){
   // console.log(this.consulta1);
    this.consultasService.unaConslta(id).subscribe((resClientes: any) => {
     // console.log(resClientes);
      this.consulta1 = resClientes;
      $('#modalmodificarConsulta').modal();
      $('#modalmodificarConsulta').modal("open");
      //console.log(this.consulta1);
  
  },
      (err: any) => console.error(err)
    );
  }
  modificarConsulta(){
    this.CPacienteid=Number(localStorage.getItem("UltimoidConsulta"));
    this.consultasService.modificarConsulta(this.consulta1).subscribe(
      res => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Informacion de la consulta modificada con exito",
          showConfirmButton: true
        });
        this.consultasService.consultaPaciente(this.CPacienteid).subscribe((res:any )=> { 
          this.listaConsulta=res;
          //console.log(this.li);
        }, err => console.error(err));
        
         
       }, err => console.error(err));
  }

  exportConsulta() {
    
    const nombreExcel =   this.NombrePacienteConsulta+'Consulta';
    
    let element = document.getElementById('TablaConsulta');
    this.excelService.exportAsExcelFile(element,nombreExcel);
  }


}
