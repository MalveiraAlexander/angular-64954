import { HttpErrorResponse } from '@angular/common/http';
import { UserResponse } from '../../models/responses/users.response';
import { UsersService } from './../../services/users/users.service';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  users: UserResponse[] = [];


  private userService = inject(UsersService);
  private router = inject(Router);

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


  goToEdit(user: UserResponse) {
    this.router.navigate([`/main/users/edit/${user.id}`])
  }

  deleteUser(user: UserResponse) {
    this.userService.deleteUser(user.id).subscribe({
      next: () => {},
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.getUsers();
      }
    });
  }

}
