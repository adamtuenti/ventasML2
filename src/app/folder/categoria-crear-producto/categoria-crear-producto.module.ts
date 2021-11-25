import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaCrearProductoPageRoutingModule } from './categoria-crear-producto-routing.module';


import { PipesModule } from 'src/app/pipes/pipes.module';
import { CategoriaCrearProductoPage } from './categoria-crear-producto.page';

import {ComponentsModule} from 'src/app/folder/components/components.module';



@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CategoriaCrearProductoPageRoutingModule,
  ],
  declarations: [CategoriaCrearProductoPage]
})
export class CategoriaCrearProductoPageModule {}
