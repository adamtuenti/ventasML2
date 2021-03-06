import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroUsuarioPipe } from './filtro-usuario.pipe';
import { FiltroCategoriaPipe } from './filtro-categoria.pipe';
import { FiltroProductosPipe } from './filtro-productos.pipe';
import { FiltroCategoriaLocalPipe } from './filtro-categoria-local.pipe';
import { FiltroLocalPipe } from './filtro-local.pipe';



@NgModule({
  declarations: [FiltroUsuarioPipe, FiltroCategoriaPipe, FiltroProductosPipe, FiltroCategoriaLocalPipe, FiltroLocalPipe],
  exports:[FiltroUsuarioPipe, FiltroCategoriaPipe, FiltroProductosPipe, FiltroCategoriaLocalPipe, FiltroLocalPipe], 
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
