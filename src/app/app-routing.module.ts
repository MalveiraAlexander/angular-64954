import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UnoComponent } from './pages/uno/uno.component';
import { DosComponent } from './pages/dos/dos.component';
import { TresComponent } from './pages/tres/tres.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { UnoDosComponent } from './pages/uno/uno-dos/uno-dos.component';
import { UnoTresComponent } from './pages/uno/uno-tres/uno-tres.component';
import { UnoCuatroComponent } from './pages/uno/uno-cuatro/uno-cuatro.component';

const routes: Routes = [
  { path: 'uno', component: UnoComponent, title: 'Uno - Clase 2', loadChildren: () => import('./pages/uno/uno.module').then(m => m.UnoModule) },
  { path: 'dos', component: DosComponent, title: 'Dos - Clase 2', data: {type: 15, extra: 'algo'} },
  { path: 'tres', component: TresComponent, title: 'Tres - Clase 2' },
  { path: 'cuatro', loadChildren: () => import('./pages/cuatro/cuatro.module').then(m => m.CuatroModule) },
  { path: 'products', component: ProductosComponent, title: 'Productos - Clase 2' },
  { path: 'pedidos/:id', component: PedidosComponent, title: 'Pedidos - Clase 2' },
  { path: '', redirectTo: 'uno', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, title: 'Not Found - Clase 2' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
