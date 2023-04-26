import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Password } from 'src/app/models/password';
import { Router } from "@angular/router";
import { CorreoService } from 'src/app/services/correo.service';
import Swal from "sweetalert2";//para lanzar alertas
import { param } from 'jquery';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent {
  //con = new Password(); //variable de tipo password que nos serivra para poder verificar la nueva contraseña
  usuario1=new Usuario();
  usuario2=new Usuario();

  token: any //variable en donde estara el token
  constructor(private usuariosService: UsuariosService, private route: ActivatedRoute, private correoService: CorreoService){
    this.route.paramMap.subscribe(params => {
        this.token = params.get('token');
        //console.log(this.token);
        this.correoService.decodificarMail(this.token).subscribe((resP: any) => {
          this.usuario1.correo=resP.correo;
          //console.log(this.usuario1);
        }
        ), (err: any) => console.error(err)
      }, err => console.error(err)
    );
  }



  enviarContrasenia(){
   // console.log("se va actualizar");
    if (this.usuario1.password==this.usuario2.password) {
     // console.log("Coincidem las contraseñas");
      if(this.checkPassword(this.usuario1.password)){
        //console.log("Es valida en el if para poder actualizar");
        this.usuariosService.modificarPassword(this.usuario1).subscribe((resU:any)=>{
          //console.log(resU);
        }
        ),(err: any) => console.error(err);
      
        //console.log(this.usuario1);
      }else{
        Swal.fire({
          position: "center",
          icon: "error",
          title: "contraseña no  valida",
          showConfirmButton: true
        });
      }
    } else {

      Swal.fire({
        position: "center",
        icon: "error",
        title: "las contraseñas no coinciden",
        showConfirmButton: true
      });
      
    }
  }


  checkPassword(valor:any){
    var myregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 
   if(myregex.test(valor)){
       //console.log(valor+" es valido :-) !");
       return true;        
   }else{
      //console.log(valor+" NO es valido!");
       return false;        
   }   
 }

} 