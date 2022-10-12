import { Component, OnInit } from '@angular/core';
import { sugerenciaCategoriaLocal } from 'src/app/models/sugerenciaCategoriaLocal';
import { SugerenciaLocalesService } from 'src/app/services/sugerencia-locales.service';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

import { ModalController } from '@ionic/angular';



import { LocalesService } from 'src/app/services/locales.service'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  sugerencia: sugerenciaCategoriaLocal = new sugerenciaCategoriaLocal();
  public user: Usuarios = new Usuarios();
  imagen = ''
  premium;
  loaded = false
  id;
  editarImagenes = false
  urlFotos = ['https://firebasestorage.googleapis.com/v0/b/ventasml2.appspot.com/o/iconos%2Fhombre-removebg-preview.png?alt=media&token=d5d24ab9-dabf-447e-995e-d6baf946d4fa', 'https://firebasestorage.googleapis.com/v0/b/ventasml2.appspot.com/o/iconos%2Fjoven-removebg-preview.png?alt=media&token=4f48796e-6235-47c8-8d84-2f008cd8e2a9', 'https://firebasestorage.googleapis.com/v0/b/ventasml2.appspot.com/o/iconos%2Fmujer-removebg-preview.png?alt=media&token=51768cf9-037b-44ca-bb7c-817b7871d755', 'https://firebasestorage.googleapis.com/v0/b/ventasml2.appspot.com/o/iconos%2Fmujer1-removebg-preview.png?alt=media&token=be8859b0-09a8-4e01-98e8-d15747e44fb4']


  constructor(private sugerenciaService: SugerenciaLocalesService,
    private usuarioService: UsuarioService,
    private alertCtrt: AlertController,
    private modalCtrl: ModalController,
    private authService: AuthService) { }

  ngOnInit() {
    this.id = localStorage.getItem('userId');
    if (localStorage.getItem('userId') != null) {
      this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => { this.user = res; this.verPremium(); this.loaded = true; this.imagen = res.Foto });
    }


    //this.obtenerLocales()


  }

  cambiarAvatar(url){
    this.imagen = url
  }

  editarFoto(){
    this.editarImagenes = true
  }

  guardarAvatar(){
    this.editarImagenes = false
    if(this.user.Foto != this.imagen){
      this.user.Foto = this.imagen
      this.usuarioService.updateUsuario(localStorage.getItem('userId'), this.user);
    }
  }

  noGuardarAvatar(){
    this.editarImagenes = false
    this.imagen = this.user.Foto
  }


  

  verPremium() {
    if (this.user.Premium) {
      this.premium = 'Sí'
    }
    else {
      this.premium = 'No'
    }
  }

  async crearSugerencia() {

    const alert = await this.alertCtrt.create({
      cssClass: 'my-custom-class',
      header: 'Dános tu sugerencia:',

      // message: 'Nombre del curso:',
      inputs: [
        {
          name: 'sugerencia',
          placeholder: 'Escribe tu sugerencia',
          type: 'text'

        }
      ],

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            if (data.sugerencia != "") {
              this.agregarSugerencia(data.sugerencia)
            } else if (data.sugerencia == "") {

              //this.failedAlert("El campo email es requerido");
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async serVendedor() {

    const alert = await this.alertCtrt.create({
      cssClass: 'my-custom-class',
      header: '¿Desea cambiar su estado a vendedor?',

      message: 'Pronto nos pondremos en contacto con usted!',


      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Sí',
          handler: (data) => {
            this.convertirseVendedor()
          }
        }
      ]
    });
    await alert.present();
  }

  async serPremium() {

    const alert = await this.alertCtrt.create({
      cssClass: 'my-custom-class',
      header: '¿Desea comprar una cuenta premium?',

      message: 'Pronto nos pondremos en contacto con usted!',


      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Sí',
          handler: (data) => {
            this.convertirsePremium()
          }
        }
      ]
    });
    await alert.present();
  }


  async esperaVendedor() {

    const alert = await this.alertCtrt.create({
      cssClass: 'my-custom-class',
      header: 'Cambio de estado a vendedor',

      message: 'Pronto nos contactaremos con usted para el cambio de estado!',


      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }
      ]
    });
    await alert.present();
  }

  convertirseVendedor() {
    this.user.Verificacion = true;
    this.usuarioService.updateUsuario(localStorage.getItem('userId'), this.user);
  }

  convertirsePremium() {
    this.user.EsperaPremium = true;
    this.usuarioService.updateUsuario(localStorage.getItem('userId'), this.user);
  }

  agregarSugerencia(sugerencia: string) {
    var fechaActual = new Date();
    this.sugerencia.Titulo = sugerencia;
    this.sugerencia.Visibilidad = true;
    this.sugerencia.Usuario = localStorage.getItem('userId');
    this.sugerencia.Tipo = 'sugerencia';
    this.sugerencia.Fecha = fechaActual.toString();;
    this.sugerenciaService.addSugerencia(this.sugerencia);

  }

  logOutUser() {
    this.authService.logOutUser();
  }

}
