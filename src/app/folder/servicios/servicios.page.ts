import { Component, OnInit } from '@angular/core';
import { Servicios } from 'src/app/models/servicios';
import { ServiciosService } from 'src/app/services/servicios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  servicios : Servicios[] = [];
  idUser;
  textoBuscar = '';
  loaded = false
  skeleton = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 7, 8]

  constructor(
              private router: Router,
              private servicioService: ServiciosService,
              private activateRoute: ActivatedRoute,
              private alertCtrt: AlertController,) { }

  ngOnInit() {
    this.servicioService.getServicios().subscribe(res=> {this.servicios = res;this.shuffle(this.servicios); this.loaded = true});
    this.idUser = localStorage.getItem('userId');
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

  aumentarVisita(id:string,servicios:Servicios){
    servicios.Visitas= servicios.Visitas + 1
    this.servicioService.updateServicio(id,servicios)
    this.router.navigate(['/servicio-detalle',servicios.id, servicios.Usuario]); 
  }


  validarSesion(){
    if(this.idUser != null){
      this.router.navigate(['/crear-servicio']);
    }

    else{
      this.iniciarSesion();
    }

  }
  async iniciarSesion() {

    const alert = await this.alertCtrt.create({
      cssClass: 'my-custom-class',
      header: 'No ha iniciado sesión',
      
      message: 'Para promocionar un servicio primero debe iniciar sesión.',


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



  async alert(id) {
    const alert = await this.alertCtrt.create({
      cssClass: 'my-custom-class',
      header: "¿Seguro que desea eliminar?",
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
     this.servicioService.removeServicio(id);
  }

}
