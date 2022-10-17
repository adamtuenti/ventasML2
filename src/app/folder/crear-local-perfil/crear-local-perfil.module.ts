import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearLocalPerfilPageRoutingModule } from './crear-local-perfil-routing.module';

import { CrearLocalPerfilPage } from './crear-local-perfil.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    CrearLocalPerfilPageRoutingModule
  ],
  declarations: [CrearLocalPerfilPage]
})
export class CrearLocalPerfilPageModule {}
