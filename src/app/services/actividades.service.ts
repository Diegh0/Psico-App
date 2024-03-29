import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, query, where , doc} from '@angular/fire/firestore';
import { Actividad } from '../Models/Actividad';
import { Observable, retry } from 'rxjs';
const PATH = 'Actividades';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  private firestore = inject(Firestore);
  private collectionBD = collection(this.firestore,PATH);

  getActividades(): Observable<Actividad[]> {
    return collectionData(this.collectionBD) as Observable<Actividad[]>;
  }
  // getActividadesPorHabilidad(habilidadRef: string): Observable<Actividad[]> {
  //   const q = query(collection(this.firestore, 'actividades'), where('referencia', '==', doc(this.firestore, habilidadRef)));
  //   return collectionData(q, { idField: 'id' }) as Observable<Actividad[]>;
  // }

  
}
