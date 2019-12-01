import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  id: number;
  title: string;
  constructor( private bookService: BookService ) { }

  ngOnInit() {
    this.id = this.bookService.book.id;
    this.title = this.bookService.book.title;
  }

  onUpdate(){

  }

}
