import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MateriasPendientesDetallePageRoutingModule } from './materias-pendientes-detalle-routing.module';

import { MateriasPendientesDetallePage } from './materias-pendientes-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MateriasPendientesDetallePageRoutingModule
  ],
  declarations: [MateriasPendientesDetallePage]
})
export class MateriasPendientesDetallePageModule {}
