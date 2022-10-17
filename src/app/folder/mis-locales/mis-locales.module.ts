import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { MisLocalesPageRoutingModule } from './mis-locales-routing.module';


import { MisLocalesComponent } from './mis-locales.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import {ComponentsModule} from 'src/app/components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MisLocalesPageRoutingModule
  ],
  declarations: [MisLocalesComponent]
})
export class MisLocalesPageModule {}
