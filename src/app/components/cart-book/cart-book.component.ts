import { Component, Input } from '@angular/core';
import { Book } from '../../models/Books.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-book',
  imports: [RouterLink],
  templateUrl: './cart-book.component.html',
  styleUrl: './cart-book.component.css'
})
export class CartBookComponent {
@Input() book: Book | null = null;
redirectUrl: string = '';
ngOnInit(){
    this.redirectUrl = this.book?.name.replace(/\s+/g, '-') || '';
}
}
