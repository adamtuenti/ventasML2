import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasLocalesPageRoutingModule } from './categorias-locales-routing.module';

import { CategoriasLocalesPage } from './categorias-locales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriasLocalesPageRoutingModule
  ],
  declarations: [CategoriasLocalesPage]
})
export class CategoriasLocalesPageModule {}
