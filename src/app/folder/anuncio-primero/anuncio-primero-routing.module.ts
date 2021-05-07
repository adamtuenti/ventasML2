import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnuncioPrimeroPage } from './anuncio-primero.page';

const routes: Routes = [
  {
    path: '',
    component: AnuncioPrimeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnuncioPrimeroPageRoutingModule {}
