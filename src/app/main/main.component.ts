import { Component, OnInit, inject } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  word: string;
  public storageService = inject(StorageService);
  ngOnInit(): void {
  }

}
