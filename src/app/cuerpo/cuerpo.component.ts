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

    let cuerpo = document.getElementById("maindiv");

    let elemento: HTMLElement;

    elemento = document.createElement('div')
    elemento.className = 'row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'

    

    this.listaProductos.productos.forEach(function (producto){
      
      let col = document.createElement('div')
      col.className ='col mb-5'
      let card = document.createElement('div')
      card.className = 'card h-100'
      

      let imagen = document.createElement('img')
      imagen.className = 'card-img-center cardImg'
      imagen.src= producto.source
      imagen.alt = producto.nombre
      

      let nombreProd = document.createElement('div')
      nombreProd.className = 'card-body pt-0 border-top-0'

      let div2 = document.createElement('div')
      div2.className = 'text-center pt-0'
      nombreProd.appendChild(div2)

      let nombre = document.createElement('h5')
      nombre.className = 'fw-bolder mb-0'
      nombre.textContent = producto.nombre
      div2.appendChild(nombre)
      div2.insertAdjacentText('beforeend',producto.precio)

      let boton = document.createElement('div')
      boton.className = 'card-footer p-4 pt-0 border-top-0 bg-transparent'

      let div3 = document.createElement('div')
      div3.className = 'text-center'

      let btn = document.createElement('a')
      btn.className = 'btn btn-outline-dark mt-auto'
      btn.href = '#'
      btn.innerText = 'Agregar al carro'

      div3.appendChild(btn)
      boton.appendChild(div3)


      card.appendChild(imagen)
      card.appendChild(nombreProd)
      card.appendChild(boton)
      col.appendChild(card)
      elemento.appendChild(col)

    });

    cuerpo?.appendChild(elemento);
  }
}