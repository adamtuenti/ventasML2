import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearProductoTodosPageRoutingModule } from './crear-producto-todos-routing.module';

import { CrearProductoTodosPage } from './crear-producto-todos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearProductoTodosPageRoutingModule
  ],
  declarations: [CrearProductoTodosPage]
})
export class CrearProductoTodosPageModule {}
