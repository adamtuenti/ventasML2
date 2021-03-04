import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cursos } from 'src/app/models/cursos';
import { cursosPendientes } from 'src/app/models/cursosPendientes';
import { Usuarios } from 'src/app/models/usuario';
import { MateriasService } from 'src/app/services/materias.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-materias-pendientes-detalle',
  templateUrl: './materias-pendientes-detalle.page.html',
  styleUrls: ['./materias-pendientes-detalle.page.scss'],
})
export class MateriasPendientesDetallePage implements OnInit {
  id: string;
  public materias: Cursos[]=[];
  public user: Usuarios=new Usuarios();
  public materiasPendientes: cursosPendientes=new cursosPendientes();

  constructor(private materiasService: MateriasService,
    private usuarioService: UsuarioService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {  
      const id = paramMap.get('id');
      const usuarioId = paramMap.get('usuarioId');
      this.id= id;
      this.materiasService.getcursoPendiente(id).subscribe(res => {this.materiasPendientes =res});
      
      this.usuarioService.getUsuario(usuarioId).subscribe(res => {this.user =res});
    });
    this.materiasService.getCursos().subscribe(res => {this.materias =res}); 
  }

  aceptar(){
    this.materiasPendientes.Estado = false;
   
    this.materiasService.updatecursosPendientes(this.id,this.materiasPendientes).then(
      res => this.router.navigateByUrl("/materias-pendientes")
    )
    .catch(
      err => console.log("error")
    )
  }

}
