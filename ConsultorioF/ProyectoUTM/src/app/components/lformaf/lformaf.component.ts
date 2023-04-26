import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormaFacial } from "src/app/models/formafacial";
import { FormafacialService} from '../../services/formafacial.service';


@Component({
  selector: 'app-lformaf',
  templateUrl: './lformaf.component.html',
  styleUrls: ['./lformaf.component.css']
})
export class LformafComponent {
  constructor(private formaService: FormafacialService, private router:Router,private activatedRoute: ActivatedRoute){}
    forma1 = new FormaFacial();
    ngOnInit() {
      const params = this.activatedRoute.snapshot.params;
      //si hay un parametro entonces es el metodo de modificar 
      if (params['id']) {
        this.formaService.obtenerUnaFormafacial(params['id'])
          .subscribe((res: any) => {
             // console.log(res);
              this.forma1= res;
            },
            err => console.log(err)
          )
      }
    }

}
