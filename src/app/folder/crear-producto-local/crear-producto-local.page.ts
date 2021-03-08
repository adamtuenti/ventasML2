import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosLocales } from 'src/app/models/productosLocales';
import { ProductosLocalesService } from 'src/app/services/productos-locales.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { AlertController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-crear-producto-local',
  templateUrl: './crear-producto-local.page.html',
  styleUrls: ['./crear-producto-local.page.scss'],
})
export class CrearProductoLocalPage implements OnInit {

  public producto: ProductosLocales = new ProductosLocales();
  idLocal;
  idPropietario;
  miId: '7G091ZlAzKhS9TrNFqAX';
  loading: HTMLIonLoadingElement;
  image: string | ArrayBuffer;
  file: File;

  constructor(private angularFireStorage: AngularFireStorage,
    private router: Router,
    private alertCtrt: AlertController,
    private productosService: ProductosLocalesService,
    private activateRoute: ActivatedRoute,
    public loadingController: LoadingController,) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      this.idLocal = paramMap.get('idLocal');
      this.idPropietario = localStorage.getItem('userId');
    });
  }

  crearProducto(form){
    this.presentLoading("Espere por favor...");
    this.producto.Titulo = form.value.titulo;
    this.producto.Precio = form.value.precio;
    this.producto.Local = this.idLocal;
    this.producto.Usuario = localStorage.getItem('idUser');
    if(this.image!=null){
      this.guardarProducto();
    }
    else{
      this.producto.Foto = 'https://firebasestorage.googleapis.com/v0/b/ventasml2.appspot.com/o/iconos%2Femoji.png?alt=media&token=849ac04c-7ba8-447a-b129-9056810d1c29';
      this.productosService.addProducto(this.producto).then(
      auth=>{
        
        this.loading.dismiss();


        this.router.navigate(["/productos-locales",this.idLocal, this.idPropietario])
      }       
    ).catch(async error => {
      this.loading.dismiss();
      this.failedAlert("Algo salió mal, inténtelo de nuevo");
    })

    }
    
 
   
    

    
    
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

  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
        this.file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.image = reader.result;

        reader.readAsDataURL(this.file);
    }
  }

  guardarProducto(){
    
    var storageRef = this.angularFireStorage.storage.ref()

    
    storageRef.child(this.file.name).put(this.file)
    .then(
            data=>{
                    data.ref.getDownloadURL().then(
                        downloadURL => {
                          this.guardarCompleto(downloadURL);
                        }
                    ).catch(err=>{this.loading.dismiss(), this.failedAlert("Error al cargar la foto 2")});
                    

            }
    )     


  }

  guardarCompleto(downloadURL: string){
    this.producto.Foto = downloadURL;
    this.productosService.addProducto(this.producto).then(
      auth=>{
        
        this.loading.dismiss();


        this.router.navigate(["/categorias"])
      }       
    ).catch(async error => {
      this.loading.dismiss();
      this.failedAlert("Algo salió mal, inténtelo de nuevo");
    })
  }

}
