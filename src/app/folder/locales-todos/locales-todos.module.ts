import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalesTodosPageRoutingModule } from './locales-todos-routing.module';

import { LocalesTodosPage } from './locales-todos.page';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    PipesModule,
    IonicModule,
    LocalesTodosPageRoutingModule
  ],
  declarations: [LocalesTodosPage]
})
export class LocalesTodosPageModule {}
