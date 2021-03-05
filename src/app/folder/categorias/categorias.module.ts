import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasPageRoutingModule } from './categorias-routing.module';

import { CategoriasPage } from './categorias.page';
import { PipesModule } from 'src/app/pipes/pipes.module';


import {ComponentsModule} from 'src/app/folder/components/components.module';



@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CategoriasPageRoutingModule,
  ],
  declarations: [CategoriasPage]
})
export class CategoriasPageModule {}
