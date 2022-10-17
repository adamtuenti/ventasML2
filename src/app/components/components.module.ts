import { NgModule } from '@angular/core';
import {HeaderComponent} from 'src/app/components/header/header.component';
import { HeaderLocalesComponent } from './headerProductos/header.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
declarations: [
    HeaderComponent,
    HeaderLocalesComponent
],
exports: [RouterModule,HeaderComponent, HeaderLocalesComponent],

})
export class ComponentsModule { }