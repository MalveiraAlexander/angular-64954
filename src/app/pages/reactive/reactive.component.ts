import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  form: FormGroup;
  formCopy: string;

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit() {
    console.log(this.form);
    this.formCopy = this.form.value;
    this.form.patchValue({
      name: 'John',
      lastname: 'Doe',
      date: '1990-01-01',
      hasAlcohol: true
    });

    let name = this.form.get('name').value;
    console.log(name);

  }

  createForm() {
    this.form = new FormGroup({
      name: new FormControl<string>(null, [Validators.required, Validators.minLength(2), Validators.maxLength(150)]),
      lastname: new FormControl<string>(null, [Validators.required, Validators.minLength(2), Validators.maxLength(150)]),
      date: new FormControl<Date>(null, [Validators.required]),
      hasAlcohol: new FormControl<boolean>(false),
    });
    this.form.get('hasAlcohol').disable();
    this.form.get('date').valueChanges.subscribe((value) => {
      let date = new Date(value);
      let today = new Date();
      if (today.getFullYear() - date.getFullYear() > 18) {
        this.form.get('hasAlcohol').enable();
      } else {
        this.form.get('hasAlcohol').disable();
      }

    });
  }

}
