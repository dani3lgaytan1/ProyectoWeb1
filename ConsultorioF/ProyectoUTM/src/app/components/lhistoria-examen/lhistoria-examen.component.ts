import { Component } from '@angular/core';
import { HistoriaExamenService } from '../../services/historia-examen.service';
import { HistoriaExamen } from 'src/app/models/historiaExamen';
import { ActivatedRoute, Router } from "@angular/router";



@Component({
  selector: 'app-lhistoria-examen',
  templateUrl: './lhistoria-examen.component.html',
  styleUrls: ['./lhistoria-examen.component.css']
})
export class LhistoriaExamenComponent {
  constructor(private historiaService:HistoriaExamenService, private router:Router,private activatedRoute: ActivatedRoute) {}
  historia1 = new HistoriaExamen();
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    //si hay un parametro entonces es el metodo de modificar 
    if (params['id']) {
      this.historiaService.obtenerUnaHistoria(params['id'])
        .subscribe((res: any) => {
            //console.log(res);
            this.historia1= res;
  
          },
          err => console.log(err)
        )
    }
  }

}
