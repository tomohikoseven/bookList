import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  book: Book = new Book(0, '');
  constructor() { 
    this.book.id = 0;
    this.book.title = '';
  }
}
