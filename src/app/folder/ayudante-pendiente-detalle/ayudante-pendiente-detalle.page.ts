import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


import { Pagos } from 'src/app/models/pagos';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PagoService } from 'src/app/services/pago.service';
@Component({
  selector: 'app-ayudante-pendiente-detalle',
  templateUrl: './ayudante-pendiente-detalle.page.html',
  styleUrls: ['./ayudante-pendiente-detalle.page.scss'],
})
export class AyudantePendienteDetallePage implements OnInit {
 
  public user: Usuarios=new Usuarios();
  public pago: Pagos=new Pagos();
  id;
  constructor(private usuarioService: UsuarioService,
              private activateRoute: ActivatedRoute,
              private router: Router,
              private pagoService: PagoService
              ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {  
      const id = paramMap.get('id');
      this.id = id;
      
      this.usuarioService.getUsuario(id).subscribe(res => {this.user =res;});
      this.pagoService.getPago("XfwGUVknnGmJOGxMIuZA").subscribe(res =>{this.pago = res})
    });
  }

  aceptar(){
    this.user.EsperaAyudantia = false;
    this.user.AyudantiaAceptada = true;
    this.user.Rol = 'Ayudante';
    this.pago.Contador= this.pago.Contador + 1
    this.pagoService.updatePagos("XfwGUVknnGmJOGxMIuZA",this.pago)
    this.usuarioService.updateUsuario(this.id,this.user).then(
      res => this.router.navigateByUrl("/ayudantes-pendientes")
    )
    .catch(
      err => console.log("error")
    )
  }

}
