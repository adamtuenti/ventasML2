import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearProductoPerfilPage } from './crear-producto-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: CrearProductoPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearProductoPerfilPageRoutingModule {}
