import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicacionesGenerales } from 'src/app/models/publicacionesGenerales';
import { PublicacionesGeneralesService } from 'src/app/services/publicaciones-generales.service';
import { Publicidad } from 'src/app/models/publicidad';
import { PublicidadService } from 'src/app/services/publicidad.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.page.html',
  styleUrls: ['./publicaciones.page.scss'],
})
export class PublicacionesPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  idUser;

  publicaciones : PublicacionesGenerales[] = [];
  publicidad: Publicidad[] = []
  
  constructor(private angularFireStorage: AngularFireStorage,
              private router: Router,
              private alertCtrt: AlertController,
              private publicacionesService: PublicacionesGeneralesService,
              private publicidadService: PublicidadService,
              private activateRoute: ActivatedRoute,
              public loadingController: LoadingController) { }

  ngOnInit() {
    this.publicacionesService.getPublicaciones().subscribe(res=> {this.publicaciones = res;});
    this.publicidadService.getPublicidad().subscribe(res => {this.publicidad = res;console.log(this.publicidad)});
    this.idUser = localStorage.getItem('userId');
  }

}
