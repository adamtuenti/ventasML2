import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroUsuarioPipe } from './filtro-usuario.pipe';
import { FiltroCategoriaPipe } from './filtro-categoria.pipe';
import { FiltroProductosPipe } from './filtro-productos.pipe';
import { FiltroCategoriaLocalPipe } from './filtro-categoria-local.pipe';
import { FiltroProductoLocalPipe } from './filtro-producto-local.pipe';



@NgModule({
  declarations: [FiltroUsuarioPipe, FiltroCategoriaPipe, FiltroProductosPipe, FiltroCategoriaLocalPipe, FiltroProductoLocalPipe],
  exports:[FiltroUsuarioPipe, FiltroCategoriaPipe, FiltroProductosPipe, FiltroCategoriaLocalPipe], 
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
