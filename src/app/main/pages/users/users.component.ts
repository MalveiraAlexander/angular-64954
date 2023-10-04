import { HttpErrorResponse } from '@angular/common/http';
import { UserResponse } from '../../models/responses/users.response';
import { UsersService } from './../../services/users/users.service';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  users: UserResponse[] = [];

  private userService = inject(UsersService);

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.users = data;
      },
      error: (err: HttpErrorResponse) => {
        console.log('Error!', err);
        alert(`Error! - ${err.statusText}`)
      },
      complete: () => {
        console.log('Listo!');
      }
    });

    // Forma antigua de las subscripciones
    // this.userService.getUsers().subscribe((data) => {
    //   console.log(data);
    // }, (err) => {
    //   console.log('Error!', err);
    // }, () => {
    //   console.log('Listo!');
    // });
  }

}
