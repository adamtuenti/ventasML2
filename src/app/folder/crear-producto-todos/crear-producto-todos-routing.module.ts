import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearProductoTodosPage } from './crear-producto-todos.page';

const routes: Routes = [
  {
    path: '',
    component: CrearProductoTodosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearProductoTodosPageRoutingModule {}
