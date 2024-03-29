import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Productos } from 'src/app/models/productos';
import { ProductosService } from 'src/app/services/productos.service';
import { Usuarios } from 'src/app/models/usuario';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-productos-todos',
  templateUrl: './productos-todos.page.html',
  styleUrls: ['./productos-todos.page.scss'],
})
export class ProductosTodosPage implements OnInit {

  productos: Productos[] = [];
  productosTemp: Productos[] = [];
  idUser;
  textoBuscar = '';
  loaded = false
  skeleton = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 7, 8]

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private productosService: ProductosService,
              private router: Router,
              private alertCtrt: AlertController,
              private usuarioService: UsuarioService,
              private activateRoute: ActivatedRoute,) { }

  ngOnInit() {
    
    this.idUser = localStorage.getItem('userId');
    this.productosService.getProductos().subscribe(res=> {this.productos = res; this.loaded = true});
    // this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => {this.user =res;});
  }



  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
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

  aumentarVisita(id:string,productos:Productos){
    productos.Visitas= productos.Visitas + 1
    this.productosService.updateProducto(id,productos)
    this.router.navigate(['/producto-detalle',productos.id,productos.Vendedor]); 
  }

  validarSesion(){
    if(this.idUser != null){
      this.router.navigate(['/categoria-crear-producto']);
    }

    else{
      this.iniciarSesion();
    }

  }

  async iniciarSesion() {

    const alert = await this.alertCtrt.create({
      cssClass: 'my-custom-class',
      header: 'No ha iniciado sesión',
      
      message: 'Para agregar un producto primero debe iniciar sesión.',


      buttons: [
        {
          text: 'Iniciar sesión',
          handler: (data) => {
            this.router.navigate(['/login']);
            
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
           // console.log('Confirm Cancel: blah');
          }
        }
      ]
    });
    await alert.present();
  }

  

}
