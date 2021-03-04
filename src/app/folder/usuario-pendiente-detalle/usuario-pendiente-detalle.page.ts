import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-pendiente-detalle',
  templateUrl: './usuario-pendiente-detalle.page.html',
  styleUrls: ['./usuario-pendiente-detalle.page.scss'],
})
export class UsuarioPendienteDetallePage implements OnInit {

  public user: Usuarios=new Usuarios();
  id: string;
  constructor(private usuarioService: UsuarioService,
    private activateRoute: ActivatedRoute,
    private router: Router
              ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {  
      const id = paramMap.get('id');
      this.id= id;
      this.usuarioService.getUsuario(id).subscribe(res => {this.user =res; console.log(res); console.log('aqui')});
    });
  }

  aceptar(){
    this.user.Estado = 'A';
    
    this.usuarioService.updateUsuario(this.id,this.user).then(
      res => this.router.navigateByUrl("/usuarios-pendientes")
    )
    .catch(
      err => console.log("error")
    )
  }

  aceptarTemporal(){
    this.user.Estado = 'A';
    this.user.Premium = true;
    
    this.usuarioService.updateUsuario(this.id,this.user).then(
      res => this.router.navigateByUrl("/usuarios-pendientes")
    )
    .catch(
      err => console.log("error")
    )
  }

}
