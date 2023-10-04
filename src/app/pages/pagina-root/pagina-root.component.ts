import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-pagina-root',
  templateUrl: './pagina-root.component.html',
  styleUrls: ['./pagina-root.component.scss'],
})
export class PaginaRootComponent implements OnInit {

  word: string;
  constructor(public storageService: StorageService) { }

  ngOnInit(): void {
  }
}
