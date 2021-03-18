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

  constructor(
              private router: Router,
              private servicioService: ServiciosService,
              private activateRoute: ActivatedRoute,
              private alertCtrt: AlertController,) { }

  ngOnInit() {
    this.servicioService.getServicios().subscribe(res=> {this.servicios = res;});
    this.idUser = localStorage.getItem('userId');
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
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
