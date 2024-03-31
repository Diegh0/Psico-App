import { Component, inject } from '@angular/core';
import { ActividadesService } from '../../services/actividades.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Actividad } from '../../Models/Actividad';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-actividad-detalle',
  standalone: true,
  imports: [AsyncPipe,NgFor,NgIf],
  templateUrl: './actividad-detalle.component.html',
  styleUrl: './actividad-detalle.component.scss'
})
export class ActividadDetalleComponent {
  private actividadService = inject(ActividadesService)
  private  activateRoute = inject(ActivatedRoute);
  actividad$!: Observable<Actividad | Actividad[]>;



  

  
  
}
