import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../models/Books.model';
import { BOOKS } from '../../static/books-data';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-libro',
  imports: [],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})
export class LibroComponent {
idbook: number = 1;
pdfUrl: SafeResourceUrl | null = null;
book: Book | null = null;
constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer){}

ngOnInit(){
    this.route.params.subscribe((params) => {
        this.idbook = +params['id'] || 1;
        this.book = BOOKS.find(book => book.id === this.idbook) || null;
        console.log(this.book);
        if (this.book) {
          this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/libros/'+this.book.url);
        }
    });
}
}
