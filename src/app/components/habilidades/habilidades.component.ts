import { Component, inject } from '@angular/core';
import { HabilidadesService } from '../../services/habilidades.service';
import { AsyncPipe } from '@angular/common';
import { Habilidad } from '../../Models/Habilidad';
import { TemaAppService } from '../../services/tema-app.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [AsyncPipe,RouterLink],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.scss'
})
export class HabilidadesComponent {
  private habilidadesService  = inject(HabilidadesService);
  private temaService  = inject(TemaAppService);

  toggleTheme(): void {
    this.temaService.toggleTheme();
  }
  isDarkTheme(): boolean {
    return this.temaService.isDarkTheme();
  }
  habilidades = this.habilidadesService.getHabilidades();
}
