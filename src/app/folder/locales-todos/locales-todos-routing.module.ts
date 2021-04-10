import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalesTodosPage } from './locales-todos.page';

const routes: Routes = [
  {
    path: '',
    component: LocalesTodosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalesTodosPageRoutingModule {}
