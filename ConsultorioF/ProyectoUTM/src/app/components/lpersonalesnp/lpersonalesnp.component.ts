import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NopatologicosService } from '../../services/nopatologicos.service';
import { PersonalesNP } from "src/app/models/personalesnp";


@Component({
  selector: 'app-lpersonalesnp',
  templateUrl: './lpersonalesnp.component.html',
  styleUrls: ['./lpersonalesnp.component.css']
})
export class LpersonalesnpComponent {
   constructor(private nopService: NopatologicosService, private router:Router,private activatedRoute: ActivatedRoute){}
   personalesnp= new PersonalesNP;
    ngOnInit(){
      const params = this.activatedRoute.snapshot.params;
      //si hay un parametro entonces es el metodo de modificar 
      if (params['id']) {
        this.nopService.obtenerUnaPNP(params['id'])
          .subscribe((res: any) => {
             // console.log(res);
              this.personalesnp= res;
    
            },
            err => console.log(err)
          )
      }
    }



}
