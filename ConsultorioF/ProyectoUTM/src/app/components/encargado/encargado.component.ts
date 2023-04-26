import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../../services/usuarios.service";
import { ComunicacionService } from "../../services/comunicacion.service";
import { Usuario } from "src/app/models/usuario";
import { ImagenesService } from 'src/app/services/imagenes.service';
import { environment } from 'src/app/environments/environment';
import Swal from 'sweetalert2';
import { ExcelService } from 'src/app/services/excel.service';
declare var $: any
@Component({
  selector: 'app-encargado',
  templateUrl: './encargado.component.html',
  styleUrls: ['./encargado.component.css']
})
export class EncargadoComponent implements OnInit {

  pageSize = 5;
  p = 1;
  listarUsuarios: any;
  usuarioactual = new Usuario();
  imgPrincipal: any;
  fileToUpload: any;
  liga: string = environment.API_URI_IMAGENES;
  constructor(private usuarioService: UsuariosService, private imagenesService: ImagenesService, 
    private excelService: ExcelService,
    private comunicacionService: ComunicacionService
  ) {
    this.comunicacionService.observador$.subscribe(//si se recibe un mensaje 
      (msg) => {
       // console.log(msg);
        if (msg.componente == 1) {//si el mensaje es un 1 entonces se tiene que actualizar la lista de 
          this.listaUsuarios();//usuarios 

        }

      }
    );
    this.listaUsuarios();
  }
  ngOnInit(): void {
    //poder usar los modals 
    $(document).ready(function () {
      $(".modal").modal();

    });
  }
  listaUsuarios() {
    this.usuarioService.list().subscribe((resUsuario: any) => {
     // console.log(resUsuario);
      this.listarUsuarios = resUsuario;
    },
      (err: any) => console.error(err));
  }
  visualizarformularioUsuarios(id: number) {
    this.usuarioService.obtenerUnUsuario(id).subscribe((resU: any) => {
      this.usuarioactual = resU;//obtener un usuario para poder modificarlo
      $('#modalmodificarUsuario').modal();
      $('#modalmodificarUsuario').modal("open");
    })
  }
  visualizarUsuario(id: number) {
    this.usuarioService.obtenerUnUsuario(id).subscribe((resU: any) => {
      this.usuarioactual = resU;//obtener un usuario para poder modificarlo
      $('#modalverUsuario').modal();       //ahora llamar al modal para poder usarlo 
      $('#modalverUsuario').modal("open");
    })
  }
  modificarUsuario() {
    this.usuarioService.modificarUsuario(this.usuarioactual).subscribe(
      res => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Informacion del usuario modificada con exito",
          showConfirmButton: true
        });
        this.listaUsuarios();
      }, err => console.error(err));
  }
  eliminarUsuarios(id: number) {
    this.usuarioService.eliminarUsuario(id).subscribe(
      res => {
        {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Usuario eliminado con exito",
            showConfirmButton: true
          });
          //console.log(res);
          this.listaUsuarios();
        }
      }, err => console.error(err));
  }

  cargandoImagen(files: any, carpeta: any, id:any) {
    //console.log(files.files[0]);

    this.imgPrincipal = null;
    this.fileToUpload = files.files[0];
    let imgPromise = this.getFileBlob(this.fileToUpload);
    imgPromise.then(blob => {
      //console.log(blob);

      this.imagenesService.guardarImagen(id, blob, carpeta).subscribe(
        (res: any) => {
          this.imgPrincipal = blob;
        },
        err => console.error(err));
    })
  }
  getFileBlob(file: any) {
    var reader = new FileReader();
    return new Promise(function (resolve, reject) {
      reader.onload = (function (thefile) {
        return function (e: any) {
          resolve(e.target.result);
        };
      })(file);
      reader.readAsDataURL(file);
    });
  }

  dameNombre(id:any){
    return this.liga+"/usuarios/"+id+".jpg"
  }
  onImgError(event:any){
    event.target.src=this.liga+"/usuarios/0.jpg";
  }

  exportUsuarios() {
    //console.log(nombreExcel);
    let element = document.getElementById('TablaUsuarios');
    this.excelService.exportAsExcelFile(element,'Usuarios');
  }






}
