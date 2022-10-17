import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearProductoPageRoutingModule } from './crear-producto-routing.module';

import { CrearProductoPage } from './crear-producto.page';
import {ComponentsModule} from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    CrearProductoPageRoutingModule
  ],
  declarations: [CrearProductoPage]
})
export class CrearProductoPageModule {}
