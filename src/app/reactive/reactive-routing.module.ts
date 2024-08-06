import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from './basic-page/basic-page.component';
import { DinamicPageComponent } from './dinamic-page/dinamic-page.component';
import { SwitchesPageComponent } from './switches-page/switches-page.component';

const routes: Routes = [
  {
    path:'',
    children: [
      { path: 'basic', component: BasicPageComponent },
      { path: 'dinamic', component: DinamicPageComponent },
      { path: 'switches', component: SwitchesPageComponent },
      { path: '**', redirectTo: 'basic' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
