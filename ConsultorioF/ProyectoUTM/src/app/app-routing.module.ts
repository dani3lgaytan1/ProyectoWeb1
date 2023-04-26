import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {EncargadoComponent} from './components/encargado/encargado.component';
import { HomeComponent } from "./components/home/home.component";
import { ConsultasComponent } from "./components/consultas/consultas.component";
import { UtratamientoComponent } from "./components/utratamiento/utratamiento.component";
import { InfopacientesComponent } from "./components/infopacientes/infopacientes.component"
import { UconsultaComponent } from "./components/uconsulta/uconsulta.component";
import { LpacientesComponent } from "./components/lpacientes/lpacientes.component";
import {   CategoriaComponent} from "./components/categoria/categoria.component";
import { RecuperarComponent } from './components/recuperar/recuperar.component';
RecuperarComponent
const routes: Routes = [//todas las rutas 
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'recuperar/:token',
    component: RecuperarComponent,
},
  {
    path: 'home',
    component:HomeComponent,
     children:[
      { path: 'inicio',
        component:CategoriaComponent,
      },
      { path: 'listarpaciente',
        component:LpacientesComponent,
      },
      { path:'consultas',
        component:ConsultasComponent,
      },
      { path:'tratamientopaciente/:id',
        component:UtratamientoComponent,
      },
      { path:'Usuarios',
        component:EncargadoComponent
      },
      { path:'consultapaciente/:id',
        component:UconsultaComponent,
      },
      { path:'informacionpaciente/:id',
        component:InfopacientesComponent,
      }
     ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
