import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaCrearLocalPage } from './categoria-crear-local.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaCrearLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaCrearLocalPageRoutingModule {}
