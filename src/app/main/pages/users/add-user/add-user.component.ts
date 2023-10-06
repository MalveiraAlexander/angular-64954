import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRequest } from 'src/app/main/models/requests/user.request';
import { UsersService } from 'src/app/main/services/users/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  providers: [UsersService]
})
export class AddUserComponent implements OnInit {

  form: FormGroup;
  id: number = 0;

  constructor(private router: Router, private userService: UsersService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.createFrom();
    this.activatedRoute.params.subscribe((data) => {
      if (data && data['id']) {
        if (Number.parseInt(data['id'])) {
          this.id = Number.parseInt(data['id']);
          this.getUser(this.id);
        }
      }
    });
  }

  getUser(id: number) {
    this.userService.getUser(id).subscribe({
      next: (data) => {
        this.form.patchValue({
          nombre: data.name,
          role: data.role
        });
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {}
    })
  }

  createFrom() {
    this.form = new FormGroup({
      nombre: new FormControl<string>(null, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]),
      role: new FormControl<string>(null, [Validators.required, Validators.minLength(1), Validators.maxLength(200)])
    })
  }

  save() {
    const user: UserRequest = {
      name: this.form.get('nombre').value,
      role: this.form.get('role').value
    }

    if (this.id == 0) {
      this.userService.addUser(user).subscribe({
        next: () => {},
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.router.navigate(['/main/users']);
        }
      });
    } else {
      this.userService.editUser(user, this.id).subscribe({
        next: () => {},
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.router.navigate(['/main/users']);
        }
      });
    }

  }

}
