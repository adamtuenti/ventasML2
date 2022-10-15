import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantesPageRoutingModule } from './restaurantes-routing.module';

import { RestaurantesPage } from './restaurantes.page';

import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    RestaurantesPageRoutingModule
  ],
  declarations: [RestaurantesPage]
})
export class RestaurantesPageModule {}
