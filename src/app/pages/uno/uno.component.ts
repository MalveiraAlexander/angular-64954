import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent {
  constructor(private router: Router) {

  }


  goToProducts() {
    this.router.navigate(['products'], {queryParams: {type: 'Hola Mundo', extra: 'Como Estas'}});
  }

  goToPedidos() {
    const id: number = 15;
    this.router.navigate([`pedidos/${id}`]);
  }
}
