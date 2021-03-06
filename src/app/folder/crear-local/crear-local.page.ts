import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Locales } from 'src/app/models/locales';
import { LocalesService } from 'src/app/services/locales.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-crear-local',
  templateUrl: './crear-local.page.html',
  styleUrls: ['./crear-local.page.scss'],
})
export class CrearLocalPage implements OnInit {
  categoria: string;
  public local: Locales= new Locales();
  loading: HTMLIonLoadingElement;

  constructor(private router: Router,
    private alertCtrt: AlertController,
    public loadingController: LoadingController
    private localesService: LocalesService,
    private activateRoute: ActivatedRoute) { }

  
  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      this.categoria = paramMap.get('id');
    });   
  }

  crearLocal(form){
    this.presentLoading("Espere por favor...");
    this.local.Nombre = form.value.nombre;
    this.local.Descripcion = form.value.descripcion;
    this.local.Ciudadela = form.value.ciudadela;
    this.local.Manzana = form.value.manzana;
    this.local.Villa = form.value.villa;
    this.local.Telefono = form.value.telefono;
    this.local.RedSocial = form.value.redSocial;
    this.local.HorarioAtencion = form.value.horarioAtencion;
    this.local.Referencia = form.value.referencia;
    this.local.Vendedor = localStorage.getItem('userId');
    this.local.CategoriaLocal = this.categoria;
    this.local.Visibilidad = true;
    this.localesService.addLocal(this.local).then(
      auth=>{
        
        this.loading.dismiss();


        this.router.navigate(["/locales",this.categoria])
      }       
    ).catch(async error => {
      this.loading.dismiss();
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
