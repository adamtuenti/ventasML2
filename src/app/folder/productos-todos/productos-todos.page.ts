import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Productos } from 'src/app/models/productos';
import { ProductosService } from 'src/app/services/productos.service';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-productos-todos',
  templateUrl: './productos-todos.page.html',
  styleUrls: ['./productos-todos.page.scss'],
})
export class ProductosTodosPage implements OnInit {

  productos: Productos[] = [];
  productosTemp: Productos[] = [];
  public user: Usuarios=new Usuarios();
  textoBuscar = '';

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private productosService: ProductosService,
              private router: Router,
              private usuarioService: UsuarioService,
              private activateRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.productosService.getProductos().subscribe(res=> {this.productos = res;this.shuffle(this.productos);});
    // this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => {this.user =res;});
  }

  recortar(){
    //if(this.textoBuscar == ''){
      this.productosTemp = this.productos.slice(0,2)
    // }else{
    //   this.productosTemp = this.productos
    // }
    
    

    // for(let i = 0; i < this.productos.length; i ++){
    //   //if(this.productos[i].Precio[0] == '$'){
    //    //console.log(this.productos[i].Precio)
    //     //console.log('Mal: ',this.productos[i].Precio.slice(1,))
    //   //   this.productos[i].Precio = this.productos[i].Precio.slice(1,)
    //   //  this.productosService.updateProducto(this.productos[i].id, this.productos[i])
    //    this.productos[i].Precio = this.productos[i].Precio.replace(' ', "")
    //    this.productos[i].Precio = this.productos[i].Precio.replace('encebollado', "")
    //    //this.productos[i].Precio = this.productos[i].Precio.replace('lb', "")
    //    this.productosService.updateProducto(this.productos[i].id, this.productos[i])
    //    //console.log(this.productos[i].Precio)
      
    //   //}
    // }

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

  

}
