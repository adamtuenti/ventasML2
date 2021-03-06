import { Component, OnInit } from '@angular/core';
import { Comentarios } from 'src/app/models/comentarios';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-comentarios-local',
  templateUrl: './comentarios-local.page.html',
  styleUrls: ['./comentarios-local.page.scss'],
})
export class ComentariosLocalPage implements OnInit {

  comentarios:Comentarios[] = [];
  idLocal;
  public comentario: Comentarios=new Comentarios();
  constructor(private comentariosService: ComentariosService,
              private activateRoute: ActivatedRoute,
              private alertCtrt: AlertController) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      this.idLocal = paramMap.get('idLocal');
      this.comentariosService.getComentarios().subscribe(res => {this.comentarios = res;});
    });
    
  }

  async alert(id) {
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: "¿Desea eliminar este comentario?",
    buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Confirm Cancel: blah');
          }
        }, 
        {
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
    this.comentariosService.removeComentario(id)
  }

  async crearComentario() {

    const alert = await this.alertCtrt.create({
      cssClass: 'my-custom-class',
      //header: 'Agregar comentario:',
      
      message: 'Agregar un comentario',
      inputs: [
        {
          name: 'comentario',
          placeholder: 'Comentario...',
          type: 'text'
          
        },
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
            if(data.curso != ""){
              this.agregarComentario(data.comentario)
            }else if(data.curso== ""){
              
              //this.failedAlert("El campo email es requerido");
            }
          }
        }
      ]
    });
    await alert.present();
  }

  agregarComentario(comentario:string){
    var fechaActual = new Date();
    this.comentario.Empresa = this.idLocal;
    this.comentario.Usuario = 'usuario';
    this.comentario.Descripcion = comentario;
    this.comentario.Fecha = fechaActual.toString();
    this.comentariosService.addComentario(this.comentario);

  }

}
