import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicPageComponent } from './basic-page/basic-page.component';
import { SwitchesPageComponent } from './switches-page/switches-page.component';
import { DinamicPageComponent } from './dinamic-page/dinamic-page.component';


@NgModule({
  declarations: [
    BasicPageComponent,
    SwitchesPageComponent,
    DinamicPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveModule { }
