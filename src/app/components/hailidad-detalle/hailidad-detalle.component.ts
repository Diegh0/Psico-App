import { Component, inject } from '@angular/core';
import { HabilidadesService } from '../../services/habilidades.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Habilidad } from '../../Models/Habilidad';

@Component({
  selector: 'app-hailidad-detalle',
  standalone: true,
  imports: [AsyncPipe,NgIf],
  templateUrl: './hailidad-detalle.component.html',
  styleUrl: './hailidad-detalle.component.scss'
})
export class HailidadDetalleComponent {
  private habilidadesService  = inject(HabilidadesService);
  private  activateRoute= inject(ActivatedRoute);
    
  habilidad$!: Observable<Habilidad>;
  ngOnInit(){
    
    const id = this.activateRoute.snapshot.params['id'];
    this.habilidad$=this.habilidadesService.getHabilidad(id);
    
  }
    
  
}
