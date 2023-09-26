import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  form: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      name: new FormControl<string>(null, [Validators.required, Validators.minLength(2), Validators.maxLength(150)]),
      lastname: new FormControl<string>(null, [Validators.required, Validators.minLength(2), Validators.maxLength(150)]),
      date: new FormControl<Date>(null, [Validators.required]),
      hasAlcohol: new FormControl<boolean>(false),
    });
  }

}
