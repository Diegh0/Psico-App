import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, query, where , doc, getDoc} from '@angular/fire/firestore';
import { Actividad } from '../Models/Actividad';
import { Observable, from, map, retry } from 'rxjs';
const PATH = 'Actividades';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  private firestore = inject(Firestore);
  private collectionBD = collection(this.firestore,PATH);

  getActividades(): Observable<Actividad[]> {
    return collectionData(this.collectionBD,{idField:"id"}) as Observable<Actividad[]>;
  }
  getActividad(idHabilidad: string, idActividad: string): Observable<Actividad> {
    const docRef = doc(this.firestore, PATH, idHabilidad);
    return from(getDoc(docRef)).pipe(
      map(snapshot => snapshot.data() as any),
      map(data => {
        const actividadMap = data[`actividad${idHabilidad}`];
        return actividadMap.find((actividad: any) => actividad.id === idActividad);
      })
    );
  }

  
}
