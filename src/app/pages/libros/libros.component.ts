import { Component } from '@angular/core';
import { BOOKS } from '../../static/books-data';
import { CartBookComponent } from "../../components/cart-book/cart-book.component";
@Component({
  selector: 'app-libros',
  imports: [CartBookComponent],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {
  books = BOOKS;

}
