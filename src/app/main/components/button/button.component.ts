import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'e-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  @Input({required: true}) label: string; // required: true -> es obligatorio Solamente funciona con Angular 16 o superior
  @Input() loading: boolean = false;
  @Input() icon: string;

  click() {
    this.onClick.emit();
  }
}
