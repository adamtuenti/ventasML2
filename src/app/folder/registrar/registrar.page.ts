import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireStorage } from 'angularfire2/storage';

import { LoadingController } from '@ionic/angular';
import { MensajeErrorService } from 'src/app/services/mensaje-error.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  file: File;
  file1: File;
  imageSrc: string | ArrayBuffer;
  loading: HTMLIonLoadingElement;
  constructor(private angularFireStorage: AngularFireStorage,
              private authService:AuthService,
              private router: Router,
              private mensajeErrorService: MensajeErrorService,
              private alertCtrt: AlertController,
              public loadingController: LoadingController,
             ) { }

  ngOnInit() {
    
  } 

  async presentLoading(mensaje: string) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: mensaje,
      //duration: 2000
    });
    return this.loading.present();
  }

  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
        this.file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;

        reader.readAsDataURL(this.file);
    }
  }



  async RegistrarUser(form):Promise<void>{
    this.presentLoading("Espere por favor...");
    var telefono = form.value.telefono;
    var primeros = telefono.slice(0,3);
    if(telefono.slice(0,1)==0){
      telefono = '+593' + telefono.slice(1,telefono.length);
    }
    else if(primeros == '+593'){
      telefono = telefono
    }
    
    
    this.guardarArchivo(form.value.nombre, form.value.apellido,form.value.email, form.value.password, form.value.ciudadela, form.value.manzana, form.value.villa, telefono);
  }

  guardarArchivo(nombre:string, apellido: string, email:string, password:string, ciudadela:string ,manzana:string, villa: string, telefono: string){
    
    var storageRef = this.angularFireStorage.storage.ref()

    
    storageRef.child(this.file.name).put(this.file)
    .then(
            data=>{
                    data.ref.getDownloadURL().then(
                        downloadURL => {
                          
                            this.RegistrarUserCompleto(nombre, apellido, email, password, ciudadela, manzana, villa, telefono, downloadURL)  

                      
                        }
                    ).catch(err=>{this.loading.dismiss(), this.failedAlert("Error al cargar la foto de perfil, intentelo de nuevo")});
                    

            }
    )     


  }

 

  
  async RegistrarUserCompleto(nombre:string, apellido: string, email:string, password:string, ciudadela:string ,manzana:string, villa: string, telefono: string, downloadURL:string){
    this.authService.registerUser(nombre, apellido, email, password, ciudadela, manzana, villa, telefono, downloadURL).
    then(
      auth=>{
        this.loading.dismiss();
        
          this.router.navigateByUrl("/categorias")
       
       
      }  
    ).catch(async error => {
      this.loading.dismiss();
      var mensaje=error.code.split('/')[1];
      const presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
      this.failedAlert(presentarMensaje)
    })
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