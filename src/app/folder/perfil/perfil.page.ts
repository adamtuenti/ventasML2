import { Component, OnInit } from '@angular/core';
import { sugerenciaCategoriaLocal } from 'src/app/models/sugerenciaCategoriaLocal';
import { SugerenciaLocalesService } from 'src/app/services/sugerencia-locales.service';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  sugerencia: sugerenciaCategoriaLocal = new sugerenciaCategoriaLocal();
  public user: Usuarios=new Usuarios();

  constructor(private sugerenciaService: SugerenciaLocalesService,
              private usuarioService: UsuarioService,
              private alertCtrt: AlertController,
              private authService:AuthService) { }

  ngOnInit() {
    this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => {this.user =res;});
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
           // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            if(data.sugerencia != ""){
              this.agregarSugerencia(data.sugerencia)
            }else if(data.sugerencia == ""){
              
              //this.failedAlert("El campo email es requerido");
            }
          }
        }
      ]
    });
    await alert.present();
  }

  agregarSugerencia(sugerencia:string){
    var fechaActual = new Date();
    this.sugerencia.Titulo = sugerencia;
    this.sugerencia.Visibilidad = true;
    this.sugerencia.Usuario = localStorage.getItem('userId');
    this.sugerencia.Tipo = 'sugerencia';
    this.sugerencia.Fecha = fechaActual.toString();;
    this.sugerenciaService.addSugerencia(this.sugerencia);

  }

  logOutUser(){
    this.authService.logOutUser();
  }

}
