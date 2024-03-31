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
//   getActividad(id:string){
  
//     return from(getDoc(doc(this.firestore,PATH,id))).pipe(
//       map(snapshot =>snapshot.data() as Actividad)

//     );
// }
getActividad(actividadId: string): Observable<Actividad | null> {
  const actividadDocRef = doc(this.firestore, 'Actividades', actividadId);
  return from(getDoc(actividadDocRef)).pipe(
    map(actividadDoc => {
      if (actividadDoc.exists()) {
        return actividadDoc.data() as Actividad;
      } else {
        return null; // La actividad no existe
      }
    })
  );
}

  
}
