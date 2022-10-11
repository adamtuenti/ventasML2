import { Component, OnInit } from '@angular/core';
import { Servicios } from 'src/app/models/servicios';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { AngularFireStorage } from 'angularfire2/storage';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';

import * as firebase from 'firebase';

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.page.html',
  styleUrls: ['./crear-servicio.page.scss'],
})
export class CrearServicioPage implements OnInit {

  public servicio = {'Descripcion': '', 'Foto': '', 'Titulo': '', 'Usuario': '', 'Visibilidad': true, 'Visitas': 0, 'id': ''}
  loading: HTMLIonLoadingElement;
  image: string | ArrayBuffer;

  file: File;

  constructor(private angularFireStorage: AngularFireStorage,
              private router: Router,
              private nativeAudio: NativeAudio,
              private alertCtrt: AlertController,
              private servicioService: ServiciosService,
              private activateRoute: ActivatedRoute,
              public loadingController: LoadingController) { }

  ngOnInit() {
  }

  IonViewWillLeave(){
    this.nativeAudio.unload('audioWo')
  }

  ionViewWillEnter(){
    this.nativeAudio.preloadSimple('audioWo','assets/audio/mario-bros-here-we-go-hoo.mp3')
  }



  play(){
    this.nativeAudio.play('audioWo', () => console.log('uniqueId1 is done playing'))
  }

  crearServicio(form){
    this.presentLoading("Espere por favor...");
    this.servicio.Titulo = form.value.titulo;
    this.servicio.Descripcion = form.value.descripcion;
    this.servicio.Usuario = localStorage.getItem('userId');
    this.servicio.Visibilidad = true;
    this.servicio.Visitas = 0;

    this.guardarServicio();
 
   
    

    
    
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

  guardarServicio(){
    
    var storageRef = this.angularFireStorage.storage.ref()


    
    storageRef.child(this.file.name).put(this.file)
    .then(
            data=>{
                    data.ref.getDownloadURL().then(
                        downloadURL => {
                              this.guardarCompleto(downloadURL)  
                      
                        }
                    ).catch(err=>{this.loading.dismiss(), this.failedAlert("Error al cargar la foto")});
                    

            }
    )     


  }

  async guardarCompleto(downloadURL: string){
    this.servicio.Foto = downloadURL;

    const docRef = firebase.firestore().collection("Servicios").doc();
    this.servicio.id = docRef.id

    await docRef.set(this.servicio)
    this.play()


    // this.servicioService.addServicio(this.servicio).then(
    //   auth=>{
        
        this.loading.dismiss();


        this.router.navigate(["/mis-servicios"])
    //   }       
    // ).catch(async error => {
    //   this.loading.dismiss();
    //   this.failedAlert("Algo salió mal, inténtelo de nuevo");
    // })
  }

}
