import { Component, OnInit, inject } from '@angular/core';
import { FrasesService } from '../../services/frases.service';
import { AsyncPipe } from '@angular/common';
import { Frase } from '../../Models/Frase';
import { TemaAppService } from '../../services/tema-app.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  private frasesService  = inject(FrasesService);
  private temaService  = inject(TemaAppService);

  toggleTheme(): void {
    this.temaService.toggleTheme();
  }
  isDarkTheme(): boolean {
    return this.temaService.isDarkTheme();
  }
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
