import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Productos } from 'src/app/models/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos: Productos[] = [];
  textoBuscar = '';
  categoria;

  constructor(private productosService: ProductosService,
              private router: Router,
              private activateRoute: ActivatedRoute,) { }

  ngOnInit() {

    this.activateRoute.paramMap.subscribe(paramMap => {
      this.categoria = paramMap.get('categoria');

      this.productosService.getProductos().subscribe(res=> {this.productos = res});
    });
    
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }

  getDatos(){
    for(let i= 0; i<this.productos.length; i++){
      if(this.productos[i].Categoria == this.categoria){     
            return false;      
      }
    }
    return true;
  }

  aumentarVisita(id:string,productos:Productos){
    productos.Visitas= productos.Visitas + 1
    this.productosService.updateProducto(id,productos)
      this.router.navigate(['/producto-detalle',productos.id,productos.Vendedor]); 
  }

  

}
