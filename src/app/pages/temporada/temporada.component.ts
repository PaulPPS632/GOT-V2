import { Component, Input, OnInit } from '@angular/core';
import { Temporada } from '../../models/Temporada.model';
import { TEMPORADAS } from '../../static/data';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartCapComponent } from "../../components/cart-cap/cart-cap.component";
@Component({
  selector: 'app-temporada',
  imports: [RouterLink, CartCapComponent],
  templateUrl: './temporada.component.html',
  styleUrl: './temporada.component.css'
})
export class TemporadaComponent implements OnInit {
selectedId: number = 1; // ID de la temporada seleccionada
TEMPORADAS = TEMPORADAS;
temporada: Temporada | null = null;
constructor(private route: ActivatedRoute) {}
ngOnInit(): void {
  //this.temporada = TEMPORADAS.find(temporada => temporada.id === this.id) || null;
  this.route.params.subscribe(params => {
    if(+params['id']>8 || +params['id']<1){
      this.selectedId = 1;
    }else{
      this.selectedId = +params['id'] || 1; // Por defecto es la temporada 1
    }
    this.temporada = TEMPORADAS.find(temporada => temporada.id === this.selectedId) || null;
  });
}
}
