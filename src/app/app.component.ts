import { Component, OnInit, inject } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public storageService = inject(StorageService);
  message: string;

  ngOnInit(): void {
    this.storageService.getMessage();
  }
}
