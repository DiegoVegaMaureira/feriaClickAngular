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

    if(!this.listaProductos){
      console.log("vacio");
      return;
    }

    let cuerpo = document.getElementById("contenidoInicio");
    const container = cuerpo?.getElementsByTagName("div");

    if(!container)
      return;

    let elemento;

    elemento = document.createElement('div')
    elemento.className = 'row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'

    container?.item(0)?.appendChild(elemento);

    this.listaProductos.productos.forEach(function (producto){
      
      let col = document.createElement('div');
      col.className ='col mb-5'
      let card = document.createElement('div');
      card.className = 'card h-100'
      col.appendChild(card)

      let imagen = document.createElement('img')
      imagen.className = 'card-img-top'
      imagen.alt = producto.nombre
      card.appendChild(imagen)

      let div1 = document.createElement('div')
      div1.className = 'card-body p-4'

      let div2 = document.createElement('div')
      div2.className = 'text-center'
      div1.appendChild(div2)

      let nombre = document.createElement('h5')
      nombre.className = 'fw-bolder'
      nombre.textContent = producto.nombre
      div2.appendChild(nombre)

      div2.insertAdjacentText('beforeend',producto.precio)

      container.item(0)?.appendChild(card);

    });
  }

}
