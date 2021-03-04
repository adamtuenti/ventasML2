import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-premium-pendientes-detalle',
  templateUrl: './premium-pendientes-detalle.page.html',
  styleUrls: ['./premium-pendientes-detalle.page.scss'],
})
export class PremiumPendientesDetallePage implements OnInit {

  public user: Usuarios=new Usuarios();
  id;
  constructor(private usuarioService: UsuarioService,
              private activateRoute: ActivatedRoute,
              private router: Router,
              ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {  
      const id = paramMap.get('id');
      this.id = id;
      
      this.usuarioService.getUsuario(id).subscribe(res => {this.user =res;});
    });
  }

  aceptar(){
    this.user.EsperaPremium = false;
    this.user.Premium = true;
    this.usuarioService.updateUsuario(this.id,this.user).then(
      res => this.router.navigateByUrl("/premium-pendientes")
    )
    .catch(
      err => console.log("error")
    )
  }

}
