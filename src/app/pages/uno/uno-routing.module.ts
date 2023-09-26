import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UnoCuatroComponent } from './uno-cuatro/uno-cuatro.component';
import { UnoDosComponent } from './uno-dos/uno-dos.component';
import { UnoTresComponent } from './uno-tres/uno-tres.component';

const routes: Routes = [
  { path: 'dos', component: UnoDosComponent, title: 'Uno.2 - Clase 2' },
  { path: 'tres', component: UnoTresComponent, title: 'Uno.3 - Clase 2' },
  { path: 'cuatro', component: UnoCuatroComponent, title: 'Uno.4 - Clase 2' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UnoRoutingModule { }
