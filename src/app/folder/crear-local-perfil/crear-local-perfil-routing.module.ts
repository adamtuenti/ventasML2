import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearLocalPerfilPage } from './crear-local-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: CrearLocalPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearLocalPerfilPageRoutingModule {}
