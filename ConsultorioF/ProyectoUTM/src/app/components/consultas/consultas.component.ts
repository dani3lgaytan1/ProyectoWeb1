import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ConsultasService } from 'src/app/services/consultas.service';
@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit  {
  consultadia: any;

  constructor(private consultaService: ConsultasService,private router:Router) { }
  ngOnInit(): void { 
    let fecha: Date = new Date();
    let date = `${fecha.getFullYear()}-${('0'+(fecha.getMonth()+1)).slice(-2)}-${fecha.getDate()}`;
    //pasar el dia actual para saber las consultas del dia 
    this.consultaDia(date);
  }
  consultaDia(fecha:string) {
    this.consultaService.consultaDia(fecha).subscribe((resConsulta: any) => {
      //console.log(resConsulta);
      this.consultadia = resConsulta;
      //console.log(this.consultadia);
    },
      (err: any) => console.error(err));
  }

}
