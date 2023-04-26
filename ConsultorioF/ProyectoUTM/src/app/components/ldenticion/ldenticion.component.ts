import { Component } from '@angular/core';
import { DenticionService} from '../../services/denticion.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Denticion } from "src/app/models/denticion";
@Component({
  selector: 'app-ldenticion',
  templateUrl: './ldenticion.component.html',
  styleUrls: ['./ldenticion.component.css']
})
export class LdenticionComponent {
    constructor(private denticionService: DenticionService, private router:Router,private activatedRoute: ActivatedRoute){}
    denticion1 = new Denticion();
    ngOnInit() {
      const params = this.activatedRoute.snapshot.params;
      //si hay un parametro entonces es el metodo de modificar 
      if (params['id']) {
        this.denticionService.obtenerUnaDenticion(params['id'])
          .subscribe((res: any) => {
              //console.log(res);
              this.denticion1= res;
    
            },
            err => console.log(err)
          )
      }
    }

}

