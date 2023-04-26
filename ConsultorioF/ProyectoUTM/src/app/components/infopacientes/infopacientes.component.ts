import { Component } from '@angular/core';
import { PacientesService } from '../../services/pacientes.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Paciente } from 'src/app/models/pacientes';
import { PatologiasFamiliaresService} from '../../services/patologias-familiares.service';
import { PatologiaFamiliar } from "src/app/models/patologiafamiliar";


@Component({
  selector: 'app-infopacientes',
  templateUrl: './infopacientes.component.html',
  styleUrls: ['./infopacientes.component.css']
})
export class InfopacientesComponent {
  listadePatologias :any;
  constructor(private pacienteService: PacientesService, private router:Router,
    private activatedRoute: ActivatedRoute,
    private patologiasfhService : PatologiasFamiliaresService){}
  paciente1 = new Paciente();

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    //si hay un parametro entonces es el metodo de modificar 
    if (params['id']) {
      this.pacienteService.obtenerUnPaciente(params['id'])
        .subscribe((res: any) => {
            //console.log(res);
            this.paciente1= res;
  
          },err => console.log(err));

      this.patologiasfhService.obtenerTablapatologiasf(params['id']).subscribe((resFH:any)=>{
           this.listadePatologias=resFH;

      },(err:any) => console.error(err));
      



    }

    




  }
  


}
