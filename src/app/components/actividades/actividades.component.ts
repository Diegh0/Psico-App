import { Component, inject } from '@angular/core';
import { ActividadesService } from '../../services/actividades.service';
import { AsyncPipe, CommonModule, JsonPipe, NgIf } from '@angular/common';
import { TemaAppService } from '../../services/tema-app.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-actividades',
    standalone: true,
    templateUrl: './actividades.component.html',
    styleUrl: './actividades.component.scss',
    imports: [AsyncPipe, RouterLink, FormsModule,NgFor,NgIf,JsonPipe,CommonModule]
})
export class ActividadesComponent {
  private actividadesService  = inject(ActividadesService);
  private temaService = inject(TemaAppService);
  opciones:string[]=['Todas','Tiempo menor a mayor','Tiempo mayor a menor']
  filtroEstado:string='Todas'
  actividades = this.actividadesService.getActividades();
  dropdownOpen = false;

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

  toggleDropdown() {    
    this.dropdownOpen = !this.dropdownOpen;
  }
}