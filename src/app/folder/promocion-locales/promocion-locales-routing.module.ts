import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromocionLocalesPage } from './promocion-locales.page';

const routes: Routes = [
  {
    path: '',
    component: PromocionLocalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromocionLocalesPageRoutingModule {}
