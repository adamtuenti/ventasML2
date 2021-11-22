import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Locales } from 'src/app/models/locales';
import { LocalesService } from 'src/app/services/locales.service';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-locales-todos',
  templateUrl: './locales-todos.page.html',
  styleUrls: ['./locales-todos.page.scss'],
})

export class LocalesTodosPage implements OnInit {

  locales : Locales[] = [];

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private router: Router,
              private localesService: LocalesService,
              private usuarioService: UsuarioService,
              private alertCtrt: AlertController,
              private activateRoute: ActivatedRoute) { }


  ngOnInit() {
      this.localesService.getLocales().subscribe(res=> {this.locales = res;this.shuffle(this.locales);this.recortar()});  
  }

  recortar(){
    this.locales = this.locales.slice(0,25)
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  aumentarVisita(id:string,locales:Locales){
    // locales.Visitas = locales.Visitas + 1
    // this.localesService.updateLocal(id,locales)
    this.router.navigate(['/detalle-local',locales.id, locales.Usuario]); 
  }


}
