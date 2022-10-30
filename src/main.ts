import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

function abrirLogin(){
  let cuerpo = document.getElementById("maindiv")

  if(cuerpo != null){
  cuerpo.innerHTML = ""

  let forma = document.createElement("form")
  forma.method = "post"
  forma.className = "container-lg px-3"

  let parrafo = document.createElement('p')
  let usuario = document.createElement('input')
  usuario.placeholder = 'Correo electronico'
  usuario.name = 'name'
  usuario.minLength = 3
  usuario.type = 'email'
  usuario.required = true

  parrafo.appendChild(usuario)

  parrafo = document.createElement('input')
  let contra = document.createElement('input')
  contra.placeholder = 'Contraseña'
  contra.name = 'name'
  contra.minLength = 7
  contra.type = 'password'
  contra.required = true
  }
}
