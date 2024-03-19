import { Component, inject } from '@angular/core';
import { ActividadesService } from '../../services/actividades.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-actividades',
  standalone: true,
  imports: [AsyncPipe,JsonPipe],
  templateUrl: './actividades.component.html',
  styleUrl: './actividades.component.scss'
})
export class ActividadesComponent {
  private actividadesService  = inject(ActividadesService);
  actividades = this.actividadesService.getActividades();
  ngOnInit(){
    console.log(this.actividades)
  }
}
