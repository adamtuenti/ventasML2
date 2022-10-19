import { Component } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

import { ActivatedRoute, Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  showFooter: boolean = false;
  titulo: string;
  showMenuHeader: boolean = false
  idUser;



  constructor(private authService: AuthService, private router: Router) {
    this.checkDarkMode();
    router.events.forEach((event) => {

      if (event instanceof NavigationStart) {

        this.idUser = localStorage.getItem('userId') ? true : false
        console.log(localStorage.getItem('userId') ? true : false)


        if (event['url'] == '/login' || event['url'] == '/registrar' || event['url'] == '/carousel' || event['url'] == '/' || event['url'].includes('comunicacion-local')) {
          //this.showHead = false;
          this.showFooter = false;
          this.showMenuHeader = false

        } else {
          //this.showHead = true;
          this.showFooter = true;
          this.showMenuHeader = true
        }

        let url = event['url'].slice(1,).toLocaleUpperCase()
        this.formatTitleMenu(url)




        //this.titulo = event['url'].slice(1, ).toLocaleUpperCase()
      }
    });
  }

  logOutUser() {
    this.authService.logOutUser();
  }



  checkDarkMode() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    toggleDarkTheme(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));

    // Add or remove the "dark" class based on if the media query matches
    function toggleDarkTheme(shouldAdd) {
      document.body.classList.toggle('dark', shouldAdd);
    }
  }


  formatTitleMenu(url) {
    console.log(url, this.idUser)
    if (url.includes('TODOS')) {
      let temp = url.split('-')
      this.titulo = temp[0]
    }
    else if (url == 'CATEGORIAS') {
      this.titulo = 'CATEGORÍAS PRODUCTOS'
    } else if (url.includes('DETALLE-LOCAL')) {
      this.titulo = 'DETALLE LOCAL'

    } else if (url.includes('CATEGORIAS-LOCALES')) {
      this.titulo = 'CATEGORÍAS LOCALES'

    } else if (url.includes('PRODUCTO-DETALLE')) {
      this.titulo = 'DETALLE PRODUCTO'

    } else if (url.includes('PERFIL-UPDATE')) {
      this.titulo = 'PERFIL'

    } else if (url.includes('PUBLICACION-DETALLE')) {
      this.titulo = 'DETALLE PUBLICACIÓN'

    } else if (url.includes('PRODUCTOS/')) {
      this.titulo = 'PRODUCTOS'

    } else if (url.includes('PRODUCTOS-LOCALES/')) {
      this.titulo = 'PRODUCTOS DEL LOCAL'

    } else if (url.includes('COMENTARIOS-LOCAL/')) {
      this.titulo = 'COMENTARIOS'

    } else if (url.includes('EDITAR-LOCAL/')) {
      this.titulo = 'EDITAR LOCAL'

    }else if (url.includes('EDITAR-PRODUCTO/')) {
      this.titulo = 'EDITAR PRODUCTO'

    }else if (url.includes('LOCALES/')) {
      this.titulo = 'LOCALES'

    } else if (url.includes('PUBLICACIONES-GENERALES')) {
      this.titulo = 'CREAR PUBLICACIÓN'

    } else if (url.includes('CATEGORIA-CREAR')) {
      this.titulo = 'SELECCIONE CATEGORÍA'

    } else if (url.includes('SERVICIO-DETALLE')) {
      this.titulo = 'DETALLE SERVICIO'

    } else if (url.includes('CREAR-PRODUCTO/')) {
      this.titulo = 'CREAR PRODUCTO'

    } else if (url.includes('CREAR-LOCAL/')) {
      this.titulo = 'CREAR LOCAL'

    } else if (url.includes('-') && !url.includes('/')) {
      this.titulo = url.replace('-', ' ')
    } else {
      this.titulo = url
    }
  }


}
