import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from '../book.service';
import { BookListService } from '../book-list.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: number;
  title: string;
  constructor(
    private bookService: BookService,
    private bookListService: BookListService,
    private route: Router
  ) {
    this.id    = this.bookService.book.id;
    this.title = this.bookService.book.title;
   }

  ngOnInit() {
  }

  onSubmit() { 
    this.bookListService.getBookList().forEach(element => {
      if( element.id == this.id ){
        element.title = this.title;
      }
    });

    this.route.navigate(['bookList']);
  }
}
