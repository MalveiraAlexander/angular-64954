import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path: 'main', component: MainComponent, title: 'Main Page', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  {path: 'auth', component: AuthComponent, title: 'Auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
