import { Component, OnInit, inject } from '@angular/core';
import { FrasesService } from '../../services/frases.service';
import { AsyncPipe } from '@angular/common';
import { Frase } from '../../Models/Frase';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  private frasesService  = inject(FrasesService);
  // frase=this.frasesService.getFrases();

  fraseAleatoria: Frase | null = null;

  ngOnInit(): void {
    this.obtenerFraseAleatoria();
  }

  async obtenerFraseAleatoria() {
    try {
      this.fraseAleatoria = await this.frasesService.obtenerFraseAleatoria();
    } catch (error) {
      console.error('Error al obtener la frase aleatoria:', error);
    }
  }
}
