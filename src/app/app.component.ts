import { Component, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  palabras: string[] = ['hola', 'adios', 'hasta luego', 'hasta mañana'];
  palabras2: WritableSignal<string[]> = signal(['hola', 'adios', 'hasta luego', 'hasta mañana'])

  agregarPalabra(palabra: string) {
    this.palabras = [...this.palabras, palabra]; //Operador spread
  }
}
