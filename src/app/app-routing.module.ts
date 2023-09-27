import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { TemplateComponent } from './pages/template/template.component';
import { blockGuard } from './guards/block.guard';

const routes: Routes = [
  {path: 'reactive', component: ReactiveComponent, canActivate: [blockGuard]},
  {path: 'template', component: TemplateComponent},
  {path: '', redirectTo: 'template', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
