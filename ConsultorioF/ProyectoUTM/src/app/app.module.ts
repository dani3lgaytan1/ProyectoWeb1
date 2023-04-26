import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EncargadoComponent } from './components/encargado/encargado.component';

import { HomeComponent } from './components/home/home.component';
import { LdenticionComponent } from './components/ldenticion/ldenticion.component';
import { LformafComponent } from './components/lformaf/lformaf.component';
import { LhistoriaExamenComponent } from './components/lhistoria-examen/lhistoria-examen.component';
import { LpersonalesnpComponent } from './components/lpersonalesnp/lpersonalesnp.component';
import { UconsultaComponent } from './components/uconsulta/uconsulta.component';
import { UtratamientoComponent } from './components/utratamiento/utratamiento.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { LpacientesComponent } from './components/lpacientes/lpacientes.component';
import { InfopacientesComponent } from './components/infopacientes/infopacientes.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EncargadoComponent,
    HomeComponent,
    LdenticionComponent,
    LformafComponent,
    LhistoriaExamenComponent,
    LpersonalesnpComponent,
    UconsultaComponent,
    UtratamientoComponent,
    ConsultasComponent,
    LpacientesComponent,
    InfopacientesComponent,
    FooterComponent,
    NavbarComponent,
    CategoriaComponent,
    RecuperarComponent,
    ImagenesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
