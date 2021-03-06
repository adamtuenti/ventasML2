import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductosLocales } from 'src/app/models/productosLocales';
import { ProductosLocalesService } from 'src/app/services/productos-locales.service';

@Component({
  selector: 'app-productos-locales',
  templateUrl: './productos-locales.page.html',
  styleUrls: ['./productos-locales.page.scss'],
})
export class ProductosLocalesPage implements OnInit {

  productos: ProductosLocales[] = [];
  textoBuscar = '';
  idLocal;

  constructor(private productosService: ProductosLocalesService,
              private router: Router,
              private activateRoute: ActivatedRoute,) { }

  ngOnInit() {

    this.activateRoute.paramMap.subscribe(paramMap => {
      this.idLocal = paramMap.get('idLocal');
      console.log(this.idLocal);

      this.productosService.getProductos().subscribe(res=> {this.productos = res;console.log(this.productos)});
    });
    
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }

  getDatos(){
    for(let i= 0; i<this.productos.length; i++){
      if(this.productos[i].Local == this.idLocal){     
            return false;      
      }
    }
    return true;
  }


  

}
