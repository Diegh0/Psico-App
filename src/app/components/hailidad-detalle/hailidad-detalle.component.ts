import { Component, inject } from '@angular/core';
import { HabilidadesService } from '../../services/habilidades.service';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Habilidad } from '../../Models/Habilidad';
import { TemaAppService } from '../../services/tema-app.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hailidad-detalle',
  standalone: true,
  imports: [AsyncPipe,NgIf,CommonModule],
  templateUrl: './hailidad-detalle.component.html',
  styleUrl: './hailidad-detalle.component.scss'
})
export class HailidadDetalleComponent {
  private habilidadesService  = inject(HabilidadesService);
  private  activateRoute = inject(ActivatedRoute);
  private temaService = inject(TemaAppService)
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  habilidad$!: Observable<Habilidad>;
  ngOnInit(){
    
    const id = this.activateRoute.snapshot.params['id'];
    this.habilidad$=this.habilidadesService.getHabilidad(id);
    
  }
  toggleTheme(): void {
    this.temaService.toggleTheme();
  }
  isDarkTheme(): boolean {
    return this.temaService.isDarkTheme();
  }
  
}
