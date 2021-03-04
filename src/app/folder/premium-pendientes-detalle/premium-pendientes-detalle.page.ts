import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Pagos } from 'src/app/models/pagos';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PagoService } from 'src/app/services/pago.service';

@Component({
  selector: 'app-premium-pendientes-detalle',
  templateUrl: './premium-pendientes-detalle.page.html',
  styleUrls: ['./premium-pendientes-detalle.page.scss'],
})
export class PremiumPendientesDetallePage implements OnInit {

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
    this.user.EsperaPremium = false;
    this.user.Premium = true;
    this.pago.ContadorPremium= this.pago.ContadorPremium + 1
    this.pagoService.updatePagos("XfwGUVknnGmJOGxMIuZA",this.pago)
    this.usuarioService.updateUsuario(this.id,this.user).then(
      res => this.router.navigateByUrl("/premium-pendientes")
    )
    .catch(
      err => console.log("error")
    )
  }

}
