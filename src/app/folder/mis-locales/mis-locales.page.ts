
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Productos } from 'src/app/models/productos';
import { LocalesService } from 'src/app/services/locales.service';
import { AlertController } from '@ionic/angular';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mis-locales',
  templateUrl: './mis-locales.page.html',
  styleUrls: ['./mis-locales.page.scss'],
})
export class MisLocalesComponent implements OnInit {

  locales = [];
  textoBuscar = '';
  condicion = false;
  public user: Usuarios=new Usuarios();
  idUser;

  constructor(private localesServices: LocalesService,
              private router: Router,
              private usuarioService: UsuarioService,
              private activateRoute: ActivatedRoute,
              private alertCtrt: AlertController) { }

  ngOnInit() {
    console.log('aqui')

    this.idUser = localStorage.getItem('userId');
    console.log('mi id: ', this.idUser)
    this.localesServices.getLocalesUsuario(this.idUser).valueChanges().subscribe(res => {this.locales = res; this.condicion = true; console.log('res: ', res)})
    this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => {this.user =res;})

    
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }


  async alert(id, nombre) {
    console.log('hola')
    console.log('id local: ', id)
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
            this.router.navigate(['/mis-locales']);                 
          }
        }
      ]
    });
    await alert.present();
  }
  remove(id){
    this.localesServices.removeLocal(id);
    this.user.Locales = this.user.Locales - 1;
    this.usuarioService.updateUsuario(this.idUser,this.user)
  }

  

}