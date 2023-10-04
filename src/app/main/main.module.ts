import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { RolesComponent } from './pages/roles/roles.component';
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    UsersComponent,
    RolesComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule
  ]
})
export class MainModule { }
