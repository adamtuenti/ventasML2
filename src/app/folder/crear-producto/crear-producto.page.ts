import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Productos } from 'src/app/models/productos';
import { ProductosService } from 'src/app/services/productos.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { AlertController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.page.html',
  styleUrls: ['./crear-producto.page.scss'],
})
export class CrearProductoPage implements OnInit {

  public producto: Productos = new Productos();
  idCategoria;
  miId: '7G091ZlAzKhS9TrNFqAX';

  constructor(private angularFireStorage: AngularFireStorage,
    private router: Router,
    private alertCtrt: AlertController,
    private productosService: ProductosService,
    private activateRoute: ActivatedRoute,
    public loadingController: LoadingController,) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      this.idCategoria = paramMap.get('idCategoria');
      console.log(this.idCategoria);
    });
  }

  crearProducto(form){
    this.presentLoading("Espere por favor...");
    this.producto.Titulo = form.value.titulo;
    this.producto.Descripcion = form.value.descripcion;
    this.producto.Vendedor = '7G091ZlAzKhS9TrNFqAX';
    this.producto.Categoria = this.idCategoria;
    this.producto.Visitas = 0;
    this.producto.Precio = form.value.precio;
    this.producto.Foto1 = '';
    this.producto.Foto2 = '';
    this.producto.Visibilidad = true;
 
   
    this.productosService.addProducto(this.producto).then(
      auth=>{
        this.loading.dismiss();

        this.router.navigate(["/productos",this.idCategoria])
      }       
    ).catch(async error => {
      this.loading.dismiss();
      console.log(error)
      this.failedAlert("Algo salió mal, inténtelo de nuevo");
    })

    
    
  }

  async presentLoading(mensaje: string) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: mensaje,
      //duration: 2000
    });
    return this.loading.present();
  }
  
  async failedAlert(text: string) {
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: text,
    buttons: [{
    text: 'OK',
      handler: () => {
        
      }
    }]   
    });
    await alert.present();
  }

}
