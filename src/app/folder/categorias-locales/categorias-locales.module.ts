import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasLocalesPageRoutingModule } from './categorias-locales-routing.module';

import { CategoriasLocalesPage } from './categorias-locales.page';

import {ComponentsModule} from 'src/app/folder/components/components.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CategoriasLocalesPageRoutingModule
  ],
  declarations: [CategoriasLocalesPage]
})
export class CategoriasLocalesPageModule {}
