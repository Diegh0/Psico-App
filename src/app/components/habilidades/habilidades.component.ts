import { Component, inject } from '@angular/core';
import { HabilidadesService } from '../../services/habilidades.service';
import { AsyncPipe } from '@angular/common';
import { Habilidad } from '../../Models/Habilidad';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.scss'
})
export class HabilidadesComponent {
  private habilidadesService  = inject(HabilidadesService);
  habilidades = this.habilidadesService.getHabilidades();
}
