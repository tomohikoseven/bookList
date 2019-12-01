import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../book';
import { BookListService } from '../book-list.service';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  show = true;
  bookList : Book[];
  constructor(
    private bookListService: BookListService,
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit() {
    this.bookList = this.bookListService.getInitList();
  }

  onClick( book: Book ){
    this.bookService.book = new Book( book.id, book.title );
    this.router.navigate(['update']);
  }

}
