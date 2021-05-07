import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromocionLocalesPageRoutingModule } from './promocion-locales-routing.module';

import { PromocionLocalesPage } from './promocion-locales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromocionLocalesPageRoutingModule
  ],
  declarations: [PromocionLocalesPage]
})
export class PromocionLocalesPageModule {}
