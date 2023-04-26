import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  liga:string = environment.API_URI_IMAGENES;
}
