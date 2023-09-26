import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UnoComponent } from './pages/uno/uno.component';
import { DosComponent } from './pages/dos/dos.component';
import { TresComponent } from './pages/tres/tres.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { UnoDosComponent } from './pages/uno/uno-dos/uno-dos.component';
import { UnoTresComponent } from './pages/uno/uno-tres/uno-tres.component';
import { UnoCuatroComponent } from './pages/uno/uno-cuatro/uno-cuatro.component';

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    DosComponent,
    TresComponent,
    NotFoundComponent,
    PedidosComponent,
    ProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
