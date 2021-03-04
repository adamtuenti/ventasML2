import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroUsuarioPipe } from './filtro-usuario.pipe';
import { FiltroCursoPipe } from './filtro-curso.pipe';
import { FiltroCategoriaPipe } from './filtro-categoria.pipe';



@NgModule({
  declarations: [FiltroUsuarioPipe, FiltroCursoPipe, FiltroCategoriaPipe],
  exports:[FiltroUsuarioPipe, FiltroCursoPipe, FiltroCategoriaPipe], 
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
