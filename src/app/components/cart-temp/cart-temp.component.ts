import { Component, Input } from '@angular/core';
import { Temporada } from '../../models/Temporada.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-temp',
  imports: [RouterLink],
  templateUrl: './cart-temp.component.html',
  styleUrl: './cart-temp.component.css'
})
export class CartTempComponent {
@Input() temporada: Temporada | null = null;
}
