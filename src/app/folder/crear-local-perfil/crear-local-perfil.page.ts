import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Locales } from 'src/app/models/locales';
import { LocalesService } from 'src/app/services/locales.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { AngularFireStorage } from 'angularfire2/storage';
import { CategoriasLocales } from 'src/app/models/categoriasLocales';
import { CategoriasLocalesService } from 'src/app/services/categorias-locales.service';



import * as firebase from 'firebase';

import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-crear-local-perfil',
  templateUrl: './crear-local-perfil.page.html',
  styleUrls: ['./crear-local-perfil.page.scss'],
})
export class CrearLocalPerfilPage implements OnInit {
  public local: Locales = new Locales();//{Usuario: any,Nombre:'',Descripcion:'',Ciudadela:'',Manzana:'',Villa:'',Telefono:'',RedSocial:'',HorarioAtencion:'',Referencia:'',CategoriaLocal:'',Visibilidad:true,Domicilio:'',Calificacion:5,Foto:any,id:any}
  loading: HTMLIonLoadingElement;
  categorias: CategoriasLocales[] = [];

  image: string | ArrayBuffer;
  file: File;

  public user: Usuarios = new Usuarios();
  id;


  constructor(private router: Router,
    private angularFireStorage: AngularFireStorage,
    private usuarioService: UsuarioService,


    private alertCtrt: AlertController,
    public loadingController: LoadingController,
    private localesService: LocalesService,
    private categoriasService: CategoriasLocalesService,
    private activateRoute: ActivatedRoute) { }


  ngOnInit() {

    this.id = localStorage.getItem('userId');
    if (localStorage.getItem('userId') != null) {
      this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => { this.user = res; });
    }



    this.categoriasService.getCategorias().subscribe(res => { this.categorias = res; });
  }

  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.image = reader.result;

      reader.readAsDataURL(this.file);
    }
  }


  crearLocal(form) {

    var telefono = form.value.telefono;
    var primeros = telefono.slice(0, 3);
    if (telefono.slice(0, 2) == '09') {
      telefono = '+593' + telefono.slice(1, telefono.length);
    }
    else if (primeros == '+593') {
      telefono = telefono
    } else {
      telefono = telefono;
    }

    this.presentLoading("Espere por favor...");
    this.local.Nombre = form.value.nombre;
    this.local.Descripcion = form.value.descripcion;
    this.local.Ciudadela = form.value.ciudadela;
    this.local.Manzana = form.value.manzana;
    this.local.Villa = form.value.villa;
    this.local.Telefono = telefono;
    if (form.value.redSocial != '') {
      this.local.RedSocial = form.value.redSocial;
    } else {
      this.local.RedSocial = '';
    }

    this.local.HorarioAtencion = form.value.horarioAtencion;
    if (form.value.referencia != '') {
      this.local.Referencia = '';
    } else {
      this.local.Referencia = form.value.referencia;

    }
    this.local.Usuario = localStorage.getItem('userId');
    this.local.CategoriaLocal = form.value.categoria;
    this.local.Visibilidad = true;
    this.local.Domicilio = form.value.domicilio;
    this.local.Calificacion = 5;
    this.guardarLocal();
  }

  guardarLocal() {

    var storageRef = this.angularFireStorage.storage.ref()


    storageRef.child(this.file.name).put(this.file)
      .then(
        data => {
          data.ref.getDownloadURL().then(
            downloadURL => {
              this.crearLocalFinal(downloadURL)
            }
          ).catch(err => { this.loading.dismiss(), this.failedAlert("Error al cargar la foto") });


        }
      )


  }

  async crearLocalFinal(downloadURL: string) {

    this.user.Locales = this.user.Locales + 1
    this.usuarioService.updateUsuario(this.id, this.user)


    this.local.Foto = downloadURL;

    this.loading.dismiss();
    const docRef = firebase.firestore().collection("Locales").doc();
    this.local.id = docRef.id

    this.local = Object.assign({}, this.local)

    


    await docRef.set(this.local)

    this.loading.dismiss();
    this.router.navigate(["/comunicacion-local",docRef.id,localStorage.getItem('userId')])
        //this.failedAlert("Listo! Local creado");



        //this.router.navigate(["/mis-locales"])

    /* this.localesService.addLocal(this.local).then(
      auth=>{
        
        this.loading.dismiss();
        this.failedAlert("Local creado");



        this.router.navigate(["/perfil"])
      }       
    ).catch(async error => {
      this.loading.dismiss();
      this.failedAlert("Hubo un error.");
      //this.router.navigate(["/perfil"])
    }) */



    /* this.localesService.addLocal(this.local).then(
      auth=>{
        
        this.loading.dismiss();
        this.failedAlert("Local creado");



        this.router.navigate(["/perfil"])
      }       
    ).catch(async error => {
      this.loading.dismiss();
      this.failedAlert("Hubo un error.");
      //this.router.navigate(["/perfil"])
    }) */

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
