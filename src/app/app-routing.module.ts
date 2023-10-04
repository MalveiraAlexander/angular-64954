import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaRootComponent } from './pages/pagina-root/pagina-root.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent, loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  {path: 'root', component: PaginaRootComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
