import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  message: string;

  sendMessage: EventEmitter<string> = new EventEmitter<string>();

  saveWord(word: string) {
    sessionStorage.setItem('word', word);
  }

  getWord(): string {
    return sessionStorage.getItem('word');
  }

  getMessage() {
    this.sendMessage.subscribe((message: string) => {
      this.message = message;
    });
  }
}
