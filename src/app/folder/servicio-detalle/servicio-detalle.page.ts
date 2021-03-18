import { Component, OnInit } from '@angular/core';
import { Servicios } from 'src/app/models/servicios';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-servicio-detalle',
  templateUrl: './servicio-detalle.page.html',
  styleUrls: ['./servicio-detalle.page.scss'],
})
export class ServicioDetallePage implements OnInit {

  servicio : Servicios = new Servicios();
  constructor(private router: Router,
              private servicioService: ServiciosService,) { }

  ngOnInit() {
  }

}
