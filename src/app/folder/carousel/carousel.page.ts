import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { VariablesService } from 'src/app/services/variables.service';
// import { NativeAudio } from '@ionic-native/native-audio/ngx';

import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.page.html',
  styleUrls: ['./carousel.page.scss'],
})
export class CarouselPage implements OnInit {

  //usuarios:Usuarios[] = [];


  carousel = []
  registrarPromo;

  promocion;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private router: Router,
  //private usuarioService: UsuarioService,
              private variablesService: VariablesService,
              ) { }

  ionViewWillEnter(){
    // this.nativeAudio.preloadSimple('audioWo','assets/audio/mario-bros-mamma-mia.mp3')
  }

  ngOnInit() {
    this.variablesService.getVariable('wCIVneApMUwcOvDwIneJ').subscribe(res=> {this.promocion = res.Promocion; this.registrarPromo = res.registrarPromo});

    firebase.firestore().collection('Carousel').orderBy('Orden').onSnapshot(snap =>{
      this.carousel = []
        snap.forEach(element => {
          this.carousel.push(element.data())
        })
        //this.nativeAudio.play('audioWo')
    })


    //this.usuarioService.getUsuarios().subscribe(res => {this.usuarios = res;this.funcion()});
  }

  IonViewWillLeave(){
    //this.nativeAudio.unload('audioWo')
  }

  // funcion(){
  //   for(let i = 0; i < this.usuarios.length; i++){
  //     this.usuarios[i].NumeroReferidos = 0;
  //     this.usuarios[i].Referido = '';
  //     this.usuarioService.updateUsuario(this.usuarios[i].id, this.usuarios[i])
  //   }
  // }

  cambiar(){
    console.log(this.promocion)
    if(this.promocion){

      if(this.registrarPromo){

      }else{

      }
      this.router.navigateByUrl('/perfil');

    }else{
      this.router.navigateByUrl('/publicaciones');

    }
  }




}
