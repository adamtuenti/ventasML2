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
  loading: HTMLIonLoadingElement;
  image: string | ArrayBuffer;
  image1: string | ArrayBuffer;

  file: File;
  file1: File;

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
    this.producto.Vendedor = localStorage.getItem('userId');
    this.producto.Categoria = this.idCategoria;
    this.producto.Visitas = 0;
    this.producto.Precio = form.value.precio;
    this.producto.Visibilidad = true;

    this.guardarProducto();
 
   
    

    
    
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

  readURL1(event): void {
    if (event.target.files && event.target.files[0]) {
        this.file1 = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.image1 = reader.result;

        reader.readAsDataURL(this.file1);
    }
  }

  guardarProducto(){
    
    var storageRef = this.angularFireStorage.storage.ref()

    var storageRef1 = this.angularFireStorage.storage.ref()

    
    storageRef.child(this.file.name).put(this.file)
    .then(
            data=>{
                    data.ref.getDownloadURL().then(
                        downloadURL => {
                          
                            storageRef1.child(this.file1.name).put(this.file1)
                            .then(
                              data=>{data.ref.getDownloadURL().then(
                                downloadURL1 =>this.guardarCompleto(downloadURL, downloadURL1)  
                                )}
                            ).catch(err=>{this.loading.dismiss(), this.failedAlert("Error al cargar la foto 1")});
                            
                          
                      
                        }
                    ).catch(err=>{this.loading.dismiss(), this.failedAlert("Error al cargar la foto 2")});
                    

            }
    )     


  }

  guardarCompleto(downloadURL: string, downloadURL1: string){
    this.producto.Foto1 = downloadURL;
    this.producto.Foto2 = downloadURL1;
    this.productosService.addProducto(this.producto).then(
      auth=>{
        
        this.loading.dismiss();


        this.router.navigate(["/productos",this.idCategoria])
      }       
    ).catch(async error => {
      this.loading.dismiss();
      this.failedAlert("Algo salió mal, inténtelo de nuevo");
    })
  }

}
