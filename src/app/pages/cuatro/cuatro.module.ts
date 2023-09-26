import { CuatroRoutingModule } from './cuatro-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CuatroPage } from './cuatro.page';

@NgModule({
  declarations: [
    CuatroPage
  ],
  imports: [
    CommonModule,
    CuatroRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class CuatroModule { }
