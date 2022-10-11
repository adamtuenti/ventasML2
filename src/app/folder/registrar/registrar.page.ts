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

import { Variables } from 'src/app/models/variables';
import { VariablesService } from 'src/app/services/variables.service';

import * as firebase from 'firebase';

import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuarios } from 'src/app/models/usuario';

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
  usuarios = [];
  usuarioReferido: Usuarios = new Usuarios()

  variables: Variables = new Variables();

  referido;

  constructor(private angularFireStorage: AngularFireStorage,
    private authService: AuthService,
    private variablesService: VariablesService,
    private router: Router,
    private mensajeErrorService: MensajeErrorService,
    private alertCtrt: AlertController,
    public loadingController: LoadingController,

    private usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
    this.variablesService.getVariable('wCIVneApMUwcOvDwIneJ').subscribe(res => { this.variables = res; });

    firebase.firestore().collection('Usuarios').orderBy('Apellido').onSnapshot(snap => {
      this.usuarios = []
      snap.forEach(element => {
        this.usuarios.push(element.data())
      })
    })
  }

  countChange(event) {
    event.target.value = event.target.value.replace(/[^0-9 | .]*/g, '');
    event.target.value = event.target.value.replace(' ', '');
    //event.target.value = event.target.value.replace(",", '.');
  }

  onChange($event) {
    this.referido = $event.target.value;

  }

  capitalizeFirstLetter(event) {
    event.target.value = this.capitalize(event.target.value)
    //return string.charAt(0).toUpperCase() + string.slice(1);
  }

  capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  onChangeId($event) {
    this.usuarioService.getUsuario($event.target.value).subscribe(res => { this.usuarioReferido = res; });

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




  async RegistrarUser(form): Promise<void> {

    console.log('form: ', form.value)
    if (this.ValidateEmail(form.value.email) == false) {
      const alert = await this.alertCtrt.create({
        message: 'Ingrese un correo válido.',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }
    if ((String(form.value.email)).length < 6) {
      const alert = await this.alertCtrt.create({
        message: 'Contraseña demasiado corta, ingrese almenos 6 caracteres.',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }

    this.presentLoading("Espere por favor...");
    let telefono = form.value.telefono;
    let primeros = telefono.slice(0, 3);
    if (telefono.slice(0, 1) == 0) {
      telefono = '+593' + telefono.slice(1, telefono.length);
    }


    let idReferido;
    if (form.value.idReferido == null) {
      idReferido = ''
      this.RegistrarUserCompleto(form.value.nombre, form.value.apellido, form.value.email, form.value.password, form.value.ciudadela, form.value.manzana, form.value.villa, telefono, 'https://firebasestorage.googleapis.com/v0/b/ventasml2.appspot.com/o/iconos%2Fperfil.png?alt=media&token=ee5b8e7d-43b5-43c1-9be9-98186a2ab2ce', '');
    } else {
      idReferido = form.value.idReferido
      //this.actualizarReferido()


      this.RegistrarUserCompleto(form.value.nombre, form.value.apellido, form.value.email, form.value.password, form.value.ciudadela, form.value.manzana, form.value.villa, telefono, 'https://firebasestorage.googleapis.com/v0/b/ventasml2.appspot.com/o/iconos%2Fperfil.png?alt=media&token=ee5b8e7d-43b5-43c1-9be9-98186a2ab2ce', idReferido);
    }






  }

  actualizarReferido() {
    this.usuarioReferido.NumeroReferidos = this.usuarioReferido.NumeroReferidos + 1
    this.usuarioService.updateUsuario(this.usuarioReferido.id, this.usuarioReferido).then(
      auth => {
        //this.loading.dismiss();



      }
    ).catch(async error => {
      // this.loading.dismiss();
      var mensaje = error.code.split('/')[1];
      const presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
    })

  }





  async RegistrarUserCompleto(nombre: string, apellido: string, email: string, password: string, ciudadela: string, manzana: string, villa: string, telefono: string, downloadURL: string, idReferido: string) {
    this.authService.registerUser(nombre, apellido, email, password, ciudadela, manzana, villa, telefono, 'https://firebasestorage.googleapis.com/v0/b/ventasml2.appspot.com/o/iconos%2Fperfil.png?alt=media&token=ee5b8e7d-43b5-43c1-9be9-98186a2ab2ce', idReferido).
      then(
        auth => {
          this.loading.dismiss();

          this.authService.loginUser(email, password).
            then(
              (res) => {
                //this.actualizarReferido();
                localStorage.setItem('userId', res.user.uid);
                localStorage.setItem('Fondo', '#FBC8B5');
                localStorage.setItem('FotoPerfil', 'https://firebasestorage.googleapis.com/v0/b/ventasml2.appspot.com/o/iconos%2Fperfil.png?alt=media&token=ee5b8e7d-43b5-43c1-9be9-98186a2ab2ce');
                this.router.navigateByUrl('/carousel');
              },

              async error => {
                var mensaje = error.code.split('/')[1]
                const presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
                const alert = await this.alertCtrt.create({
                  message: presentarMensaje,
                  buttons: [{ text: 'ok', role: 'cancel' }],
                });
                await alert.present();

              }
            )




          ///this.router.navigateByUrl("/categorias")


        }
      ).catch(async error => {
        this.loading.dismiss();
        var mensaje = error.code.split('/')[1];
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

  ValidateEmail(mail: string) {
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail)) {
      return (true)
    }
    return (false)
  }



}