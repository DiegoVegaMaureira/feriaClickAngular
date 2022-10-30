import { AppComponent } from './../app.component';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.scss']
})
export class BarraNavegacionComponent implements OnInit {

  private title = "Feria CLick";

  constructor() { }

  private isPrincipal = true
  private isLogin = false

  ngOnInit(): void {
  }

  abrirPrincipal(){
    this.isPrincipal = true
    this.isLogin = false
  }

  abrirLogin(){
    this.isPrincipal = false
    this.isLogin = true
  }

  abrirRegistro(){
    this.isPrincipal = false
    this.isLogin = false
  }

  getPrincipal(){
    return this.isPrincipal
  }

  getLogin(){
    return this.isLogin
  }
}
