import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/models/categorias';
import { CategoriasService } from 'src/app/services/categorias.service';
import { SugerenciaLocalesService } from 'src/app/services/sugerencia-locales.service';
import { sugerenciaCategoriaLocal } from 'src/app/models/sugerenciaCategoriaLocal';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  categorias: Categorias[] = [];
  textoBuscar = '';
  numeroOpcion = 1;
  idUser;
  sugerenciaLocal : sugerenciaCategoriaLocal = new sugerenciaCategoriaLocal();

  constructor(private categoriasService: CategoriasService,
              private sugerenciaService: SugerenciaLocalesService,
              private router: Router,
              private alertCtrt: AlertController) { }

  ngOnInit() {
    this.idUser = localStorage.getItem('userId');
    this.categoriasService.getCategorias().subscribe(res=> {this.categorias = res;});


  }

  async crearLocal() {

    const alert = await this.alertCtrt.create({
      cssClass: 'my-custom-class',
      header: 'Sugerir una categoría:',
      
      // message: 'Nombre del curso:',
      inputs: [
        {
          name: 'local',
          placeholder: 'Nombre de la categoría',
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
            if(data.local != ""){
              this.agregarLocal(data.local)
            }else if(data.local == ""){
              
              //this.failedAlert("El campo email es requerido");
            }
          }
        }
      ]
    });
    await alert.present();
  }

  agregarLocal(local:string){
    var fechaActual = new Date();
    this.sugerenciaLocal.Titulo = local;
    this.sugerenciaLocal.Visibilidad = true;
    this.sugerenciaLocal.Usuario = localStorage.getItem('userId');
    this.sugerenciaLocal.Tipo = 'categoriaProducto';
    this.sugerenciaLocal.Fecha = fechaActual.toString();;
    this.sugerenciaService.addSugerencia(this.sugerenciaLocal);

  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }
  validarSesion(){
    if(this.idUser != null){
      this.crearLocal();
    }

    else{
      this.iniciarSesion();
    }

  }
  async iniciarSesion() {

    const alert = await this.alertCtrt.create({
      cssClass: 'my-custom-class',
      header: 'No ha iniciado sesión',
      
      message: 'Para sugerir una categoría primero debe iniciar sesión.',


      buttons: [
        {
          text: 'Iniciar sesión',
          handler: (data) => {
            this.router.navigate(['/login']);
            
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
           // console.log('Confirm Cancel: blah');
          }
        }
      ]
    });
    await alert.present();
  }



}
