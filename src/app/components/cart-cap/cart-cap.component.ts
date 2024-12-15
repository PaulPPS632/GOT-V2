import { Component, Input } from '@angular/core';
import { Capitulo } from '../../models/Capitulo.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-cap',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-cap.component.html',
  styleUrl: './cart-cap.component.css'
})
export class CartCapComponent {
@Input() capitulo: Capitulo | null = null;
}
