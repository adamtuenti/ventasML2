import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaCrearProductoPage } from './categoria-crear-producto.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaCrearProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaCrearProductoPageRoutingModule {}
