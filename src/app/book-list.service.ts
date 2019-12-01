import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookListService {

  bookList:Book[] = [];
  constructor() { 
    this.bookList = [new Book(1,'ddd'), new Book(2, 'ccc')];
    //this.bookList.push( new Book(1, 'ddd'));
  }

  getInitList():Book[] {

    return [new Book(1,'aaa'), new Book(2, 'bbb') ];
  }

  public getBookList():Book[] {
    return this.bookList;
  }
}