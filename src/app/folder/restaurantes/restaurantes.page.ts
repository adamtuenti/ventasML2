import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Locales } from 'src/app/models/locales';
import { ProductosLocales } from 'src/app/models/productosLocales';
import { LocalesService } from 'src/app/services/locales.service';
import { ProductosLocalesService } from 'src/app/services/productos-locales.service';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage implements OnInit {

  locales = [];
  productosLocales : ProductosLocales[] = []
  textoBuscar = '';

  loaded = false
  skeleton = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 7, 8]

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private router: Router,
              private localesService: LocalesService,
              private usuarioService: UsuarioService,
              private alertCtrt: AlertController,
              private productosLocalesService: ProductosLocalesService,
              private activateRoute: ActivatedRoute) { }


  ngOnInit() {
    //this.productosLocalesService.getProductos().subscribe(res => this.productosLocales = res )
    this.localesService.getRestaurantes().valueChanges().subscribe(res=> {this.locales = res;this.shuffle(this.locales); this.loaded = true  });
      
      
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }

  recortar(){
    this.locales = this.locales.slice(0,25)
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  aumentarVisita(id:string,locales:Locales){
    // locales.Visitas = locales.Visitas + 1
    // this.localesService.updateLocal(id,locales)
    this.router.navigate(['/detalle-local',locales.id, locales.Usuario]); 
  }



  titleCaseWord(word: string) {
    if (!word) return word;
     return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }


}

