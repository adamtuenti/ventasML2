import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comunicacion-local',
  templateUrl: './comunicacion-local.page.html',
  styleUrls: ['./comunicacion-local.page.scss'],
})
export class ComunicacionLocalPage implements OnInit {

  idLocal;
  idPropietario;

  constructor(private router: Router,
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activateRoute.paramMap.subscribe(paramMap => {
      this.idLocal = paramMap.get('idLocal');
      this.idPropietario = paramMap.get('idPropietario');
    });
  }

  cambiar(){
    this.router.navigate(["/detalle-local",this.idLocal,this.idPropietario])
  }

  subirProducto(){
    this.router.navigate(["/crear-producto-local",this.idLocal,this.idPropietario])
  }

  

}
