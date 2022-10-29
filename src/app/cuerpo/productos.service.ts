import productos from './productos.json';

export class ProductoService{

    
    getProductos(){
        return productos;
    }

    botonCarro(){
        let div1 = document.createElement('div')
        div1.className = 'card-footer p-4 pt-0 border-top-0 bg-transparent'
    
        let div2 = document.createElement('div')
        div2.className = 'text-center'
    
        let boton = document.createElement('a')
        boton.className = 'btn btn-outline-dark mt-auto'
        boton.href = '#' // link por agregar
    
        div2.appendChild(boton)
        div1.appendChild(div1)
    
        return div1;
      }
}

