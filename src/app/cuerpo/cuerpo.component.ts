import { Component, OnInit } from '@angular/core';
import { ProductoService } from './productos.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss']
})

export class CuerpoComponent implements OnInit {

  

  listaProductos;
  
  constructor(servicio: ProductoService) { 
    this.listaProductos = servicio.getProductos();
  }

  ngOnInit(): void {
    let cuerpo = document.getElementById("contenidoInicio");
    let cont = cuerpo?.getElementsByTagName("div");

    this.listaProductos.productos.forEach(function (producto){
      let col = document.createElement('div class="col mb-5"');
      let card = document.createElement('div class="card h-100"');

      card.appendChild(document.createElement(
        'img class="card-img-top" src='+ producto.source+' alt="'+producto.nombre+'" /'
      ))
      console.log(producto.nombre, producto.precio, producto.source);

      card.appendChild(document.createElement(
        `
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">`+producto.nombre+`</h5>
                <!-- Product price-->
                `+producto.precio+`
            </div>
        </div>
        `
      ))

      card.appendChild(document.createElement(
        `
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Agregar al carro</a></div>
        </div>
        `
      ))

      col.appendChild(card);

    });
  }

}
