import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookListService } from '../book-list.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  show = true;
  bookList : Book[];
  constructor(
    private bookListService: BookListService
  ) { }

  ngOnInit() {
    this.bookList = this.bookListService.getInitList();
  }

  onClick( book: Book ){
    console.log( book.id );
  }

}
