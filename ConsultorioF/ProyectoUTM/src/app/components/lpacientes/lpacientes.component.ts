import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PacientesService } from 'src/app/services/pacientes.service';
import { Paciente } from 'src/app/models/pacientes';
import { NopatologicosService } from '../../services/nopatologicos.service';
import { PersonalesNP } from 'src/app/models/personalesnp';
import { HistoriaExamenService } from '../../services/historia-examen.service';
import { HistoriaExamen } from 'src/app/models/historiaExamen';
import { DenticionService } from '../../services/denticion.service';
import { Denticion } from "src/app/models/denticion";
import { FormaFacial } from "src/app/models/formafacial";
import { FormafacialService } from '../../services/formafacial.service';
import { PatologiasFamiliaresService } from '../../services/patologias-familiares.service';
import { PatologiaFamiliar } from "src/app/models/patologiafamiliar";
import { ComunicacionService } from '../../services/comunicacion.service';
import { ExcelService } from 'src/app/services/excel.service';
import Swal from "sweetalert2";//para lanzar alertas
import { environment } from 'src/app/environments/environment';

declare var $: any;
@Component({
  selector: 'app-lpacientes',
  templateUrl: './lpacientes.component.html',
  styleUrls: ['./lpacientes.component.css']
})
export class LpacientesComponent implements OnInit {
  listarPaciente: any;
  Idmodificar: any;
  pacienteActual = new Paciente();
  pageSize = 5;
  p = 1;
  constructor(private pacienteService: PacientesService, private router: Router,
    private pnpService: NopatologicosService,
    private historiaService: HistoriaExamenService,
    private denticionService: DenticionService,
    private formaService: FormafacialService,
    private comunicacionService: ComunicacionService,
    private patologiasfhService: PatologiasFamiliaresService,
    private excelService: ExcelService) {

    this.comunicacionService.observador$.subscribe(
      (msg) => {
       //console.log(msg);
        if (msg.componente == 2) {
          this.listarPacientes();
        }

      }
    );
    //se lista los pacientes 
    this.listarPacientes();


  }


  idTablaActual: any;
  personalesnpActual = new PersonalesNP();
  historiaexamenActual = new HistoriaExamen();
  denticionActual = new Denticion();
  formaActual = new FormaFacial();
  patologiafhActual1 = new PatologiaFamiliar();
  patologiafh1 = new PatologiaFamiliar();
  patologiafh2 = new PatologiaFamiliar();
  patologiafh3 = new PatologiaFamiliar();
  patologiafh4 = new PatologiaFamiliar();
  patologiafh5 = new PatologiaFamiliar();
  patologiafh6 = new PatologiaFamiliar();
  patologiafh7 = new PatologiaFamiliar();
  patologiafh8 = new PatologiaFamiliar();
  patologiafh9 = new PatologiaFamiliar();
  patologiafh10 = new PatologiaFamiliar();
  patologiafh11 = new PatologiaFamiliar();
  liga: string = environment.API_URI_IMAGENES;


  listadePatologias: any;
  ngOnInit(): void {

    $(document).ready(function () {
      $(".modal").modal();
      $('select').formSelect();
    });
  }
  listarPacientes() {
    this.pacienteService.obtenerPacientes().subscribe((resPaciente: any) => {
      //console.log(resPaciente);
      this.listarPaciente = resPaciente;
    },
      (err: any) => console.error(err));
  }
  eliminarpaciente(id: number) {
    this.pacienteService.eliminarPaciente(id).subscribe(
      res => {
        {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Paciente eliminado con exito",
            showConfirmButton: true
          });
          this.listarPacientes();
        }
      }, err => console.error(err));
  }
  tratamientopaciente(id: number,nombre:string) {
    //console.log("Ingreso a tratamiento");
    localStorage.setItem("UltimoidTratamiento", id + " ");
    localStorage.setItem("UltimoNombreTratamiento",nombre+ " ");

    this.router.navigate(['home/tratamientopaciente', +id]);
  }
  consultaspaciente(id: number,nombre:string) {
    //console.log("Ingreso a consultas del paciente");
    localStorage.setItem("UltimoidConsulta", id + " ");
    this.router.navigate(['home/consultapaciente', +id]);
    localStorage.setItem("UltimoNombreConsulta",nombre+ " ");

  }
  informacionpaciente(id: number) {
   // console.log("Ingreso a informacion general del paciente");
    //console.log(id);
    this.router.navigate(['home/informacionpaciente', +id])
  }


  mostrarFormularioModificar(id: number) {
    this.Idmodificar = id;//guardar el id para poder modificar despues 

    this.patologiasfhService.obtenerUnid(this.Idmodificar).subscribe((resp: any) => {

      this.idTablaActual = resp[0].id_afh;
      //console.log(this.idTablaActual);
    }, err => console.error(err));

   // console.log(this.Idmodificar);
    this.pacienteService.obtenerUnPaciente(id).subscribe((resPaciente: any) => {
      this.pacienteActual = resPaciente;
      $('#modalmodificarPaciente').modal();
      $('#modalmodificarPaciente').modal("open");
    }, (err: any) => console.error(err));
  }
  modificarPaciente() {
    this.pacienteService.modificarPaciente(this.pacienteActual).subscribe(
      res => {
        //console.log("paciente modificado con exito");
        this.mostrarFormularioPNP(this.Idmodificar);
      }, err => console.error(err));
  }
  mostrarFormularioPNP(id: number) {  //obtener la informacion del pnp,
    this.pnpService.obtenerUnaPNP(id).subscribe((resPnp: any) => {
      this.personalesnpActual = resPnp;
      $('#modalmodificarPnp').modal();
      $('#modalmodificarPnp').modal("open");
    }, (err: any) => console.error(err));

  }
  modificarPnp() {
    this.pnpService.modificarPNP(this.personalesnpActual).subscribe(
      res => {
        //console.log("Informacion de antecedentes patologicos no personales modificado con exito"); //mostrar  a la tabla de las patologias familiares 
        this.mostrarTablapatologiasfh(this.Idmodificar);
      }, err => console.error(err));
  }
  /* ----------------------------------------------------- */
  mostrarTablapatologiasfh(id: number) {    //se obtienen las patologias del paciente 
    this.patologiasfhService.obtenerTablapatologiasf(id).subscribe((resFH: any) => {
      this.listadePatologias = resFH;
      $("#modalistapatologiasH").modal();       //abrir el correspondiente modal de la tabla 
      $("#modalistapatologiasH").modal("open");
    }, (err: any) => console.error(err));
  }
  mostrarFormularioPatologias(id: number) {
    this.patologiasfhService.obtenerUnaPatologia(id).subscribe((resUp: any) => {    //para editar una patologia primero se obtiene la especifica 
      this.patologiafhActual1 = resUp;
      $("#modalmodificarpatologiasH").modal();        //despues se abre el modal 
      $("#modalmodificarpatologiasH").modal("open");
    }, (err: any) => console.error(err));
  }
  /* ----------------------------------------------------- */
  modificarpatologiaFH(patologia: PatologiaFamiliar) {
    this.patologiasfhService.modificarPatologia(patologia).subscribe((resfh: any) => {
     // console.log("se modifico  esta patologia ");
      this.patologiasfhService.obtenerTablapatologiasf(this.Idmodificar).subscribe((resFH: any) => {
        this.listadePatologias = resFH;
      }, (err: any) => console.error(err));
    })
  }
  mostrarFormularioHistoriaExamen() { //obtener una hisotria y examen dependiendo del id 
    //console.log(this.Idmodificar);
    this.historiaService.obtenerUnaHistoria(this.Idmodificar).subscribe((resHistoria: any) => {
      this.historiaexamenActual = resHistoria;
      $('#modalmodificarHistoria').modal();
      $('#modalmodificarHistoria').modal("open");
    }, (err: any) => console.error(err));
  }
  modificarHistoriaExamen() {
    this.historiaService.modificarHistoria(this.historiaexamenActual).subscribe(
      res => {
      //  console.log("historia modificada"); //mostrar el siguiente modal 
        //console.log(this.Idmodificar);
        this.mostrarFormularioMDenticion(this.Idmodificar);
      }, err => console.error(err));
  }

  mostrarFormularioMDenticion(id: number) {   //obtener una denticion 
    this.denticionService.obtenerUnaDenticion(id).subscribe((resDenticion: any) => {
      this.denticionActual = resDenticion; //obtener denticion para modificar
      $('#modalmodificarDenticion').modal();
      $('#modalmodificarDenticion').modal("open");
    }, (err: any) => console.error(err));
  }
  modificarDenticion() {
    this.denticionService.modificarDenticion(this.denticionActual).subscribe(
      res => {
       // console.log("Informacion de denticion modificada con exito");//moestrar el siguiente modal 
        this.mostrarFormularioMFormafacial(this.Idmodificar);
      }, err => console.error(err));
  }
  mostrarFormularioMFormafacial(id: number) { //ibtener una formafacial 
    this.formaService.obtenerUnaFormafacial(id).subscribe((resForma: any) => {
      this.formaActual = resForma;  //abrir el modal 
      $('#modalmodificarFormafacial').modal();
      $('#modalmodificarFormafacial').modal("open");
    }, (err: any) => console.error(err));
  }
  modificarFormafacial() {
    this.formaService.modificarFormafacial(this.formaActual).subscribe(
      res => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Informacion del paciente modificada con exito",
          showConfirmButton: true
        });
      }, err => console.error(err));
  }

  eliminarpatologiaHF(idP: number) {
    this.patologiasfhService.eliminarUnaPatologia(idP).subscribe((Resp: any) => {

      this.patologiasfhService.obtenerTablapatologiasf(this.Idmodificar).subscribe((resPa: any) => {
        this.listadePatologias = resPa;

      }, err1 => console.error(err1));

    }, err => console.error(err));
  }


  mostrarFormularioIngresarPatologia() {
    $('#modalpatologiasHI').modal();
    $('#modalpatologiasHI').modal("open");
  }


  ingresarPatologiafh(patologia: PatologiaFamiliar, idnombrePatologia: number) { //ingresar la patologia que se pasa



    delete patologia.id_patologia_afh;//se borra el id por que es autoincremental



    patologia.a_familiares_id = this.idTablaActual;//el id de la tabla es el que se obtuvo de la consulta
    patologia.patologia_idf = idnombrePatologia;//el id correspondiente del nombre de la patologia se pone manualmente en el html
    this.patologiasfhService.crearUnaPatologia(patologia).subscribe((resph: any) => {
      //console.log(resph);
    }, err => console.error(err));
  }

  exportAsXLSX() {
    let element = document.getElementById('TablaPacientes');
    this.excelService.exportAsExcelFile(element, 'ListadePacientes');
  }



}

