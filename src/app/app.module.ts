import { ProductoService } from './cuerpo/productos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { BotonComponent } from './boton/boton.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    CuerpoComponent,
    BotonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
