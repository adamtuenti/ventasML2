import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroUsuarioPipe } from './filtro-usuario.pipe';
import { FiltroCategoriaPipe } from './filtro-categoria.pipe';
import { FiltroProductosPipe } from './filtro-productos.pipe';



@NgModule({
  declarations: [FiltroUsuarioPipe, FiltroCategoriaPipe, FiltroProductosPipe],
  exports:[FiltroUsuarioPipe, FiltroCategoriaPipe, FiltroProductosPipe], 
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
