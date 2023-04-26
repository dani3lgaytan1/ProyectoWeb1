import { Serializer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../../services/consultas.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Consulta } from 'src/app/models/consultas';
import { PacientesService } from 'src/app/services/pacientes.service';
import { Tratamiento } from 'src/app/models/tratamiento';
import { TratamientosService } from '../../services/tratamientos.service';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from 'src/app/models/usuario';
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
import * as XLSX from 'xlsx'
import Swal from "sweetalert2";//para lanzar alertas

declare var $: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  tipoUsuario: number;

  listarpaciente: any;
  idpaciente: number | undefined;
  idtablafh: number | undefined;
  ListaUsuarios: any;
  file: any;
  arrayBuffer: any;
  exceljsondata: any;


  constructor(private consultaService: ConsultasService,
    private router: Router,
    private pacienteService: PacientesService,
    private tratamientoService: TratamientosService,
    private usuarioService: UsuariosService,
    private pnpService: NopatologicosService,
    private historiaService: HistoriaExamenService,
    private denticionService: DenticionService,
    private formaService: FormafacialService,
    private comunicacionService: ComunicacionService,
    private patologiafhService: PatologiasFamiliaresService) {
    this.tipoUsuario = Number(localStorage.getItem("tipoUsuario"));
    //this.IdUsuario = Number(localStorage.getItem("idUsuario"));



    //OBTENER LA LISTA DE LOS PACIENTES PARA LAS CONSULTAS Y TRATAMIENTOS 
    this.pacienteService.obtenerPacientes().subscribe((resP: any) => {
      // console.log(resP);
      //console.log("lista de pacientes ");
      this.listarpaciente = resP;

    }, err => console.error(err));


  }
  //Zona de declaration de las instacias de cada modelo de dato 
  tratamiento1 = new Tratamiento();
  consulta1 = new Consulta();
  usuario1 = new Usuario();
  paciente1 = new Paciente();
  personalesnp = new PersonalesNP();
  historiaexamen = new HistoriaExamen();
  denticion1 = new Denticion();
  forma1 = new FormaFacial();
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
  patologiafh12 = new PatologiaFamiliar();

  enviarMensaje(tipo: number) {
    let opciones = { "componente": tipo };
    this.comunicacionService.enviar(opciones);
  }

  ngOnInit(): void {
    $(document).ready(function () {
      $(".modal").modal();
      $('.dropdown-trigger').dropdown();
      $('select').formSelect();
    });
  }
  visualizarFormularioNuevoPaciente() {
    $('#modalPacientes').modal();
    $('#modalPacientes').modal("open");
  }

  visualizarFormularioConsulta() {
    $('#modalClientes').modal();
    $('#modalClientes').modal("open");
  }
  visualizarFormularioTratamiento() {
    $('#modalTratamiento').modal();
    $('#modalTratamiento').modal("open");
  }

  visualizarFormularioUsuario() {
    $('#modalUsuarios').modal();
    $('#modalUsuarios').modal("open");

  }
  visualizarFormularioHyE() {
    $('#modalHyE').modal();
    $('#modalHyE').modal("open");

  }

  visualizarMigrarPaciente() {
    $('#migrarPaciente').modal({ dismissible: false });
    $('#migrarPaciente').modal('open');
  }
  visualizarMigrarUsuario() {
    $('#migrarUsuario').modal({ dismissible: false });
    $('#migrarUsuario').modal('open');
  }

  limpiarpaciente() {
    this.paciente1.Responsable_o_tutor = '';
    this.paciente1.domicilio = '';
    this.paciente1.edad = 0;
    this.paciente1.escolaridad = '';
    this.paciente1.estado_civil = '';
    this.paciente1.fecha = '';
    this.paciente1.lugar_de_nacimiento = '';
    this.paciente1.medico_de_cabecera = '';
    this.paciente1.nombre = '';
    this.paciente1.ocupacion = '';
    this.paciente1.sexo = '';
    this.personalesnp.frecuencia_cepillado = '';
    this.historiaexamen.motivo_consulta = '';
    this.historiaexamen.dolor = '';
    this.historiaexamen.cuadros_importantes = '';
    this.historiaexamen.h_bruxismo = '';
    this.historiaexamen.h_digital = '';
    this.historiaexamen.h_labio = '';
    this.historiaexamen.h_lengua = '';
    this.historiaexamen.historia = '';
    this.historiaexamen.sintomas = '';
  }


  ingresarPaciente() {
    delete this.paciente1.id_paciente;
    //this.paciente1.usuario_id = this.IdUsuario; //el ide del usuario actual es el que se le pasa al atributo usuario_id 
    this.pacienteService.IngresarPaciente(this.paciente1).subscribe((resPaciente: any) => {
      this.pacienteService.ulitmoPaciente().subscribe((resPaciente: any) => { //servicio para obtener el id del ultimo paciente ingresado 
        this.idpaciente = resPaciente[0].ultimo;  //el id de este paciente es usado para ingresar la demas informacion necesaria 
        //console.log(this.idpaciente);

      }, err => console.error(err));
      //obtener el id de la ultima tabla 
      $('#modalPnp').modal();
      $('#modalPnp').modal("open");
    }, err => console.error(err));
  }
  ingresarPnp() {
    delete this.personalesnp.id_apnp;
    this.personalesnp.paciente_id = this.idpaciente;
    //console.log(this.personalesnp.paciente_id);
    //se obtiene el id y luego se ingresa 
    this.pnpService.IngresarPNP(this.personalesnp).subscribe((resUsuario: any) => {
      // console.log("Informacion de antecedentes patologicos no personales ingresada con exito");
      //obtener el id de la  tabla  de familiares hereditarios 
      this.patologiafhService.ultimoIdtabla().subscribe((resPh: any) => {
        this.idtablafh = resPh[0].ultimo;
        //console.log(this.idtablafh);//luego el valor del ultimo id se guarda en la variable
        $('#modalpatologiasHIn').modal();
        $('#modalpatologiasHIn').modal("open");
      }, err => console.error(err));

    }, err => console.error(err));


  }

  ingresarPatologiafh(patologia: PatologiaFamiliar, idnombrePatologia: number) { //ingresar la patologia que se pasa
    delete patologia.id_patologia_afh;//se borra el id por que es autoincremental

    patologia.a_familiares_id = this.idtablafh;//el id de la tabla es el que se obtuvo de la consulta
    patologia.patologia_idf = idnombrePatologia;//el id correspondiente del nombre de la patologia se pone manualmente en el html
    this.patologiafhService.crearUnaPatologia(patologia).subscribe((resph: any) => {
      //sconsole.log(resph);
    }, err => console.error(err));
  }
  ingresarHistoriaE() {
    delete this.historiaexamen.id_examen_historia;
    this.historiaexamen.paciente_id = this.idpaciente;
    this.historiaService.IngresarHistoria(this.historiaexamen).subscribe((res: any) => {
      $('#modalDenticion').modal();
      $('#modalDenticion').modal("open");
    }, err => console.error(err));
  }
  ingresarDenticion() {
    delete this.denticion1.id_denticion;
    this.denticion1.paciente_id = this.idpaciente;
    this.denticionService.IngresarDenticion(this.denticion1).subscribe((resD: any) => { //como se ingreso correctametne se abre el otro modal :
      $('#modalFormaFacial').modal();
      $('#modalFormaFacial').modal("open");
    }, err => console.error(err))
  }
  ingresarFormaFacial() {
    delete this.forma1.id_forma_facial;
    this.forma1.paciente_id = this.idpaciente;
    this.formaService.IngresarFormafacial(this.forma1).subscribe((resF: any) => { //Como ingreso correctamente la forma facial entonces se puede dar por terminado el aingreso al paciente: 
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Paciente Ingesado con exito",
        showConfirmButton: true
      });
      //luego irse a la ruta de listapaciente
      this.enviarMensaje(2);//para consultas es el 2 
      this.router.navigate(['home/listarpaciente']);

    }, err => console.error(err));


  }

  salir() {
    localStorage.removeItem("tipoUsuario");
    localStorage.removeItem("ultimoid");//el ultimo id de un paciente ingresado en la base de datos 
    localStorage.removeItem("UltimoidConsulta"); //id para ingresar las consultas correspondientes a un paciente
    localStorage.removeItem("UltimoidTratamiento");//id para ingresar el tratamiento correspondiente a un paciente
    this.router.navigate(['login']);
   // console.log("salir");
  }
  agregart() {
    delete this.tratamiento1.id_tratamiento;
    this.tratamientoService.CrearTratamiento(this.tratamiento1).subscribe((resT: any) => {
      //se inserto correctamente el nuevo tratamiento 
      //console.log("Tratamiento creado");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Tratamiento creado exito",
        showConfirmButton: true
      });
      this.enviarMensaje(4);//para tratamientos es 4
    }, err => console.error(err));
  }
  agregarconsulta() {
    this.consultaService.verificarConsulta(this.consulta1.fecha, this.consulta1.hora).subscribe((resC: any) => {
      if (resC == 0) {
        //Se crea la consulta
        delete this.consulta1.id_consulta;
        this.consultaService.crearConsulta(this.consulta1).subscribe((resT: any) => {
          //console.log(resT);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Consulta  agendada con exito",
            showConfirmButton: true
          });
          this.enviarMensaje(3);//para consultas es 3 
        }, err => console.error(err));
      } else {
        //no se puede
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Lo sentimos ya hay una consulta agendada en ese dia y hora ",
          showConfirmButton: true
        });
      }
    }, (err: any) => console.error(err));
  }

  agregarUsuario() {
    //primero buscar si no existe el usuario 
    var EMAIL_REGEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (this.usuario1.correo.match(EMAIL_REGEX)) {
      this.usuarioService.buscarUnUsuario(this.usuario1.correo).subscribe((res: any) => {
        if (res == 0) {
          delete this.usuario1.id_usuario;
          if (this.checkPassword(this.usuario1.password)) {
            //llamar al servicio de ingresar usuario, se le pasa como argumento el usuario1 
            this.usuarioService.IngresarUsuario(this.usuario1).subscribe((res: any) => {
              Swal.fire({//mensaje de que el usuario fue creado correctamente 
                position: "center",
                icon: "success",
                title: "Usuario Ingesado con exito",
                showConfirmButton: true
              });
              this.enviarMensaje(1);//enviar mensaje y se le manda el numero 1 que corresponde a los usuarios 
              this.router.navigate(['/home/Usuarios']);
            }, err => console.error(err));

          } else {
            //contraseña invalida
            Swal.fire({
              position: "center",
              icon: "error",
              title: "contraseña no  valida",
              showConfirmButton: true
            });

          }
        } else {
          //ya existe el usuario 
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Lo sentimos ya hay un usuario con el mismo correo ",
            showConfirmButton: true
          });
        }
      });
    } else {
      //Correo No valido
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Lo sentimos el correo no es valido",
        showConfirmButton: true
      });

    }
  }

  checkPassword(valor: any) {
    var myregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (myregex.test(valor)) {
     // console.log(valor + " es valido :-) !");
      return true;
    } else {
      //console.log(valor + " NO es valido!");
      return false;
    }
  }

  cargarExcel(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      //this.uploadEvent = event;
    }
    this.file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(this.file);
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      this.exceljsondata = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      //console.log(this.exceljsondata);
    }
  }

  migrarPacienteE() {
    this.exceljsondata.map((pacientes: any) => {
      //console.log("UNo")
      //console.log(pacientes);
      this.pacienteService.ImportarPacientes(pacientes).subscribe((resProfesor) => {

      }, err => { console.log(err); })
    });

    $('#migrarPaciente').modal({ dismissible: false });
    $('#migrarPaciente').modal('close');
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Pacientes Ingresados',
      confirmButtonAriaLabel: 'Thumbs up, great!'
    });
    this.enviarMensaje(2); 
  }
  migrarUsuarios() {
    this.exceljsondata.map((usuariosM: any) => {
      var EMAIL_REGEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (usuariosM.correo.match(EMAIL_REGEX)) {
      this.usuarioService.buscarUnUsuario(usuariosM.correo).subscribe((res: any) => {
        if (res == 0) {
          if (this.checkPassword(usuariosM.password)) {
            //llamar al servicio de ingresar usuario, se le pasa como argumento el usuario1 
            this.usuarioService.IngresarUsuario(usuariosM).subscribe((res: any) => {
              Swal.fire({//mensaje de que el usuario fue creado correctamente 
                position: "center",
                icon: "success",
                title: "Usuario Ingesado con exito",
                showConfirmButton: true
              });
              this.enviarMensaje(1);//enviar mensaje y se le manda el numero 1 que corresponde a los usuarios 
              this.router.navigate(['/home/Usuarios']);
            }, err => console.error(err));

          } else {
            //contraseña invalida
            Swal.fire({
              position: "center",
              icon: "error",
              title: "contraseña no  valida",
              showConfirmButton: true
            });

          }
        } else {
          //ya existe el usuario 
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Lo sentimos ya hay un usuario con el mismo correo ",
            showConfirmButton: true
          });
        }
      });
    } else {
      //Correo No valido
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Lo sentimos el correo no es valido",
        showConfirmButton: true
      });

    }
    $('#migrarUsuario').modal({ dismissible: false });
    $('#migrarUsuario').modal('close');
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Pacientes Ingresados',
      confirmButtonAriaLabel: 'Thumbs up, great!'
    });
  });

  }


}
