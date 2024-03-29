import { Pipe, PipeTransform } from '@angular/core';
import { Actividad } from '../Models/Actividad';

@Pipe({
  name: 'filtroActividades',
  standalone: true
})
export class FiltroActividadesPipe implements PipeTransform {

  transform(actividades: Actividad[], filtroEstado: string): Actividad[] {

    let actividadesFiltradas = [...actividades];

    if(!filtroEstado || filtroEstado==='Todas'){
      return actividades;
    }else if (filtroEstado==='Tiempo menor a mayor'){
      actividadesFiltradas.sort((a,b) => a.duracion - b.duracion);
    }else if (filtroEstado==='Tiempo mayor a menor'){
      actividadesFiltradas.sort((a,b)=> b.duracion - a.duracion);
    }
    return actividadesFiltradas || [];
  }

}
