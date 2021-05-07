import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnuncioPrimeroPageRoutingModule } from './anuncio-primero-routing.module';

import { AnuncioPrimeroPage } from './anuncio-primero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnuncioPrimeroPageRoutingModule
  ],
  declarations: [AnuncioPrimeroPage]
})
export class AnuncioPrimeroPageModule {}
