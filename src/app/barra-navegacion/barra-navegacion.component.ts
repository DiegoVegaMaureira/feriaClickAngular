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

  ngOnInit(): void {
  }

  login(app: AppComponent){
    app.abrirLogin()
  }
}
