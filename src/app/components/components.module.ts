import { NgModule } from '@angular/core';
import {HeaderComponent} from 'src/app/components/footer/header.component';
import { HeaderLocalesComponent } from 'src/app/components/headerMenu/header.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
declarations: [
    HeaderComponent,
    HeaderLocalesComponent
],
exports: [RouterModule,HeaderComponent, HeaderLocalesComponent],

})
export class ComponentsModule { }