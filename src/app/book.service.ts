import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  book: Book;
  constructor() { 
    this.book.id = 0;
    this.book.title = '';
  }
}
