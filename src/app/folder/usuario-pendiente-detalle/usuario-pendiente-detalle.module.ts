import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioPendienteDetallePageRoutingModule } from './usuario-pendiente-detalle-routing.module';

import { UsuarioPendienteDetallePage } from './usuario-pendiente-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioPendienteDetallePageRoutingModule
  ],
  declarations: [UsuarioPendienteDetallePage]
})
export class UsuarioPendienteDetallePageModule {}
