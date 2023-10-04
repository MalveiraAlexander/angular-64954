import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [
  ]
})
export class UsersComponent implements OnInit {

  word: string;
  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
  }

  save() {
    this.storageService.sendMessage.emit(this.word);
    setTimeout(() => {
      this.storageService.sendMessage.emit('Hello from StorageService');
    }, 5000);
  }
}
