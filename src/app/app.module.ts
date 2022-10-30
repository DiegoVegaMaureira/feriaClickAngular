import { ProductoService } from './cuerpo/productos.service';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    CuerpoComponent,
    CarruselComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: CuerpoComponent},
      {path: 'login', component: LoginComponent},
      {path: 'registro', component: RegistroComponent}
    ])
  ],
  providers: [
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
