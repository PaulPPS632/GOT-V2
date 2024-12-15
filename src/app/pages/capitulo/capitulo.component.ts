import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Capitulo } from '../../models/Capitulo.model';
import { TEMPORADAS } from '../../static/data';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-capitulo',
  imports: [],
  templateUrl: './capitulo.component.html',
  styleUrl: './capitulo.component.css',
})
export class CapituloComponent {
  temporadaId: number = 0; // ID de la temporada
  capituloId: number = 0;  // ID del capítulo
  videoUrl: SafeResourceUrl | null = null;
  capitulo: Capitulo | null = null;
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.temporadaId = +params['temporadaId'] || 1;
      this.capituloId = +params['capituloId'] || 1;

      // Buscar la temporada correspondiente
      const temporada = TEMPORADAS.find(temp => temp.id === this.temporadaId);

      // Buscar el capítulo en la temporada
      this.capitulo = temporada?.capitulos.find(cap => cap.id === this.capituloId) || null;
      console.log(this.capitulo);
      if (this.capitulo) {
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.capitulo.video);
      }
    });
  }
}
