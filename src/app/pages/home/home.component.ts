import { Component } from '@angular/core';
import { CartTempComponent } from '../../components/cart-temp/cart-temp.component';
import { Temporada } from '../../models/Temporada.model';
import { TEMPORADAS } from '../../static/data';

@Component({
  selector: 'app-home',
  imports: [CartTempComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  temporadas: Temporada[] = TEMPORADAS;
}

