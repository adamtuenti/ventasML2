import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearProductoPerfilPageRoutingModule } from './crear-producto-perfil-routing.module';

import { CrearProductoPerfilPage } from './crear-producto-perfil.page';
import {ComponentsModule} from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CrearProductoPerfilPageRoutingModule
  ],
  declarations: [CrearProductoPerfilPage]
})
export class CrearProductoPerfilPageModule {}
