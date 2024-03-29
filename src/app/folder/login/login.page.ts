import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { MensajeErrorService } from 'src/app/services/mensaje-error.service';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  users: Observable<any[]>;
  public user: Usuarios=new Usuarios();

  constructor(private authService:AuthService,
              private router: Router,
              private alertCtrt: AlertController,
              private firestore: AngularFirestore,
              private usuarioService: UsuarioService,
              private mensajeErrorService: MensajeErrorService,) { 
  }

  ngOnInit() {
  }
 
  async loginUser(form):Promise<void>{
 
   
   this.authService.loginUser(form.value.email, form.value.password).
    then(
      (res)=>{
        localStorage.setItem('userId', res.user.uid);
        //localStorage.setItem('Fondo','#FBC8B5');
        this.usuarioService.getUsuario(res.user.uid).subscribe(res1 => {this.router.navigateByUrl('/publicaciones');});


            
              
        
    },
      
      async error => {
        var mensaje=error.code.split('/')[1]
        const presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
        const alert = await this.alertCtrt.create({
          message: presentarMensaje,
          buttons:[{text: 'ok', role: 'cancel'}],      
        });
        await alert.present();
       
      }
    )
   
  }



  async goToReset(email){
    this.authService.resetPassword(email).then(
      (res)=>{   
        this.failedAlert("Se ha enviado un enlace al correo para restaurar su contraseña: "+ email);
      },async error => {
        var mensaje=error.code.split('/')[1]
        const presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
        this.failedAlert(presentarMensaje);
      } 
    )
  }
  
  async presentResetPassword() {

    const alert = await this.alertCtrt.create({
      cssClass: 'my-custom-class',
      header: 'Restaurar contraseña',
      
      message: 'Ingrese su email:',
      inputs: [
        {
          name: 'email',
          placeholder: 'email',
          type: 'email'
          
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
            if(data.email != ""){
              this.goToReset(data.email);
            }else if(data.email== ""){
              this.failedAlert("El campo email es requerido");
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async failedAlert(text) {
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: text,
    buttons: [{
    text: 'OK',
      handler: () => {
        //this.presentResetPassword();
      }
    }]   
    });
    await alert.present();
  }

}