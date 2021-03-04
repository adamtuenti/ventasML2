import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Comentarios } from 'src/app/models/comentarios';
import { ComentariosService } from 'src/app/services/comentarios.service';

@Component({
  selector: 'app-comentario-detalle',
  templateUrl: './comentario-detalle.page.html',
  styleUrls: ['./comentario-detalle.page.scss'],
})
export class ComentarioDetallePage implements OnInit {
 
  public comentario: Comentarios = new Comentarios();

  id;
  constructor(private comentarioService: ComentariosService,
              private activateRoute: ActivatedRoute,
              private router: Router,
              ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {  
      const id = paramMap.get('id');
      this.id = id;
      
      this.comentarioService.getComentario(id).subscribe(res => {this.comentario =res;});
    });
    console.log(this.comentario)
  }

  invisible(){
     this.comentarioService.updatetComentario(this.id,this.comentario).then(
       res => {this.router.navigate(['/comentarios'])}
     )
  }


}
