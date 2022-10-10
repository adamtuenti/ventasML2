import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Servicios } from 'src/app/models/servicios';
import { ServiciosService } from 'src/app/services/servicios.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mis-servicios',
  templateUrl: './mis-servicios.page.html',
  styleUrls: ['./mis-servicios.page.scss'],
})
export class MisServiciosPage implements OnInit {

  servicios = [];
  condicion = false;
  idUser;

  constructor(private servicioService: ServiciosService,
              private router: Router,
              private activateRoute: ActivatedRoute,
              private alertCtrt: AlertController) { }

  ngOnInit() {

    this.idUser = localStorage.getItem('userId');
    this.servicioService.getServiciosUsuario(this.idUser).valueChanges().subscribe(res=> {this.servicios = res; this.condicion = true});

    
  }


  getDatos(){
    for(let i= 0; i<this.servicios.length; i++){
      if(this.servicios[i].Usuario == this.idUser){     
            return false;      
      }
    }
    return true;
  }

  async alert(id, nombre) {
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: "¿Desea eliminar '" + nombre + "'?",
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
            this.router.navigate(['/mis-servicios']);                
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
