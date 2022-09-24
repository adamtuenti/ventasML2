import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaCrearLocalPageRoutingModule } from './categoria-crear-local-routing.module';

import { CategoriaCrearLocalPage } from './categoria-crear-local.page';

import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    IonicModule,
    CategoriaCrearLocalPageRoutingModule
  ],
  declarations: [CategoriaCrearLocalPage]
})
export class CategoriaCrearLocalPageModule {}
