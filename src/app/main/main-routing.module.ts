import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { RolesComponent } from './pages/roles/roles.component';
import { AddUserComponent } from './pages/users/add-user/add-user.component';

const routes: Routes = [
  {path: 'users', title: 'Main Page - Users', children: [
    {path: '', component: UsersComponent},
    {path: 'add', component: AddUserComponent, title: 'Main Page - Users Add' },
    {path: 'edit/:id', component: AddUserComponent, title: 'Main Page - Users Edit' }
  ]},
  {path: 'roles', component: RolesComponent, title: 'Main Page - Roles'},
  {path: '', redirectTo: '/main/users', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
