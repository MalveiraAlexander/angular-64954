import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { RolesComponent } from './pages/roles/roles.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent, title: 'Main Page - Users'},
  {path: 'roles', component: RolesComponent, title: 'Main Page - Roles'},
  {path: '', redirectTo: '/main/users', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
