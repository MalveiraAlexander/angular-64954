import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { StorageService } from '../services/storage.service';
import { UsersComponent } from './pages/users/users.component';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { ProductsComponent } from './pages/products/products.component';



@NgModule({
  declarations: [
    UsersComponent,
    ButtonComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ],
})
export class MainModule { }
