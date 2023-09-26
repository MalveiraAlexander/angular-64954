import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnoRoutingModule } from './uno-routing.module';
import { UnoCuatroComponent } from './uno-cuatro/uno-cuatro.component';
import { UnoDosComponent } from './uno-dos/uno-dos.component';
import { UnoTresComponent } from './uno-tres/uno-tres.component';



@NgModule({
  declarations: [
    UnoDosComponent,
    UnoTresComponent,
    UnoCuatroComponent
  ],
  imports: [
    CommonModule,
    UnoRoutingModule
  ]
})
export class UnoModule { }
