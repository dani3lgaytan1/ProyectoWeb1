import { Component } from '@angular/core';
import { UsuariosService } from "../../services/usuarios.service"; //es necesario esto para consumir servicios
import { Usuario } from "../../models/usuario";
import { Router } from "@angular/router";
import { CorreoService } from 'src/app/services/correo.service';
import Swal from "sweetalert2";//para lanzar alertas
import { environment } from 'src/app/environments/environment';

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = new Usuario();
  liga: string = environment.API_URI_IMAGENES;
  constructor(private usuariosService: UsuariosService, private router: Router, private correoService: CorreoService) { }//ocupar el servicio mediante esta variable 
  verificarUsuario() {   //el servicio hace de puente entre el cliente y el servidor 
    this.usuariosService.validar(this.usuario.correo, this.usuario.password).subscribe((resUsuario: any) => {
     // console.log(resUsuario);
      if (resUsuario == -1) {
       // console.log("el usuario no existe ");
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Correo o contraseña incorrecta",
          showConfirmButton: true
        });
      } else {
       // console.log(resUsuario[0].rol); //guardar la variable de entorno 
        //console.log(resUsuario[0].id_usuario);
        localStorage.setItem("tipoUsuario", resUsuario[0].rol + " "); //se concatena con cadena vacia para que se vuelva cadena
        //localStorage.setItem("idUsuario", resUsuario[0].id_usuario + " "); //se concatena con cadena vacia para que se vuelva cadena
        this.router.navigate(['home/inicio']);
      }
    },
      err => console.error(err));
  }

  modalCambiarContrasenya() {
   // console.log("modalCambiarContrasenya");
    $('#modalCambiarContrasenya').modal({ dismissible: false });
    $('#modalCambiarContrasenya').modal('open');
  }

  cambiarContrasenya() {
  //  console.log(this.usuario);
    this.correoService.enviarCorreoRecuperarContrasenya(this.usuario).subscribe((resUsuario: any) =>
    {
    //  console.log(resUsuario);
    }, err => console.error(err));
  
  }





}


