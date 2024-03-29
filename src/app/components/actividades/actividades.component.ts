import { Component, TrackByFunction, inject } from '@angular/core';
import { ActividadesService } from '../../services/actividades.service';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Actividad } from '../../Models/Actividad';
import { Observable } from 'rxjs';
import { TemaAppService } from '../../services/tema-app.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FiltroActividadesPipe } from "../../filtro/filtro-actividades.pipe";
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-actividades',
    standalone: true,
    templateUrl: './actividades.component.html',
    styleUrl: './actividades.component.scss',
    imports: [AsyncPipe, RouterLink, FormsModule, FiltroActividadesPipe,NgFor,NgIf,JsonPipe]
})
export class ActividadesComponent {
  private actividadesService  = inject(ActividadesService);
  private temaService = inject(TemaAppService);
  opciones:string[]=['Todas','Tiempo menor a mayor','Tiempo mayor a menor']
  filtroEstado:string='Todas'
  
  actividades = this.actividadesService.getActividades();

  
  getActividadKeys(actividad: any): string[] {
    // Esto asume que cada actividad es un objeto con claves de actividad
    return Object.keys(actividad).filter(key => key.startsWith('actividad'));
  }
  
  toggleTheme(): void {
    this.temaService.toggleTheme();
  }
  isDarkTheme(): boolean {
    return this.temaService.isDarkTheme();
  }
}