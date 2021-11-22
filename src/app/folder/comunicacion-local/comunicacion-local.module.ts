import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunicacionLocalPageRoutingModule } from './comunicacion-local-routing.module';

import { ComunicacionLocalPage } from './comunicacion-local.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComunicacionLocalPageRoutingModule
  ],
  declarations: [ComunicacionLocalPage]
})
export class ComunicacionLocalPageModule {}
