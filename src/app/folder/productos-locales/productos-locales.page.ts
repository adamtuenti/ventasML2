import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductosLocales } from 'src/app/models/productosLocales';
import { ProductosLocalesService } from 'src/app/services/productos-locales.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-productos-locales',
  templateUrl: './productos-locales.page.html',
  styleUrls: ['./productos-locales.page.scss'],
})
export class ProductosLocalesPage implements OnInit {

  productos: ProductosLocales[] = [];
  textoBuscar = '';
  idLocal;
  idPropietario;
  idUser;
  condicion: boolean;

  constructor(private productosService: ProductosLocalesService,
              private router: Router,
              private activateRoute: ActivatedRoute,
              private alertCtrt: AlertController) { }

  ngOnInit() {

    this.activateRoute.paramMap.subscribe(paramMap => {
      this.idLocal = paramMap.get('idLocal');
      this.idPropietario = paramMap.get('idPropietario');
      this.productosService.getProductos().subscribe(res=> {this.productos = res;this.condicion = this.getDatos()});
      this.idUser = localStorage.getItem('userId');
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

  async alert(id) {
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: "¿Desea eliminar este producto?",
    buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Elminar',
          handler: (data) => {
            this.remove(id)                  
          }
        }
      ]
    });
    await alert.present();
  }
  remove(id){
     this.productosService.removerProducto(id)
  }


  

}
