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
  selector: 'app-locales-todos',
  templateUrl: './locales-todos.page.html',
  styleUrls: ['./locales-todos.page.scss'],
})

export class LocalesTodosPage implements OnInit {

  locales : Locales[] = [];
  productosLocales : ProductosLocales[] = []
  textoBuscar = '';

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
    this.localesService.getLocales().subscribe(res=> {this.locales = res;this.shuffle(this.locales);this.recortar();  });
      
      
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }

  recortar(){
    this.locales = this.locales.slice(0,25)
    // for(let i = 0; i < this.productosLocales.length; i++){
    //   console.log(this.productosLocales[i].Titulo)
    // }
    //this.editar() 
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

  // editar(){
  //   for(let i = 0; i < this.locales.length; i ++){
  //     //if(this.productos[i].Precio[0] == '$'){
  //      //console.log(this.productos[i].Precio)
  //       //console.log('Mal: ',this.productos[i].Precio.slice(1,))
  //     //   this.productos[i].Precio = this.productos[i].Precio.slice(1,)
  //     //  this.productosService.updateProducto(this.productos[i].id, this.productos[i])
  //     this.locales[i].Nombre = this.titleCaseWord(this.locales[i].Nombre)
  //     //console.log(this.locales[i].Nombre)
     
  //      //this.productos[i].Precio = this.productos[i].Precio.replace('lb', "")
  //      this.localesService.updateLocal(this.locales[i].id, this.locales[i])
  //      //console.log(this.productos[i].Precio)
      
  //     //}
  //   }
  // }

  titleCaseWord(word: string) {
    if (!word) return word;
     return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }


}
