import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComunicacionLocalPage } from './comunicacion-local.page';

const routes: Routes = [
  {
    path: '',
    component: ComunicacionLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunicacionLocalPageRoutingModule {}
