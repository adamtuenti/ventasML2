import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Locales } from 'src/app/models/locales';
import { LocalesService } from 'src/app/services/locales.service';

@Component({
  selector: 'app-detalle-local',
  templateUrl: './detalle-local.page.html',
  styleUrls: ['./detalle-local.page.scss'],
})
export class DetalleLocalPage implements OnInit {

  idLocal;
  public local: Locales = new Locales();
  idUser;
  idPropietario;

  constructor(private router: Router,
              private activateRoute: ActivatedRoute,
              private localesService: LocalesService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
    this.idLocal = paramMap.get('idLocal');
    this.idPropietario = paramMap.get('idPropietario');
    this.localesService.getLocal(paramMap.get('idLocal')).subscribe(res=> {this.local = res;});
    this.idUser = localStorage.getItem('userId');
    });
  }

}
