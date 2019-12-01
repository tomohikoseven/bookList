import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookListService {

  constructor() { }

  getInitList():Book[] {

    return [new Book(1,'aaa'), new Book(2, 'bbb') ];
  }
}