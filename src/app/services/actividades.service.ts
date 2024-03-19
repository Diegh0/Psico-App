import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Actividad } from '../Models/Actividad';
import { Observable } from 'rxjs';
const PATH = 'Actividades';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  constructor() { }
  private firestore = inject(Firestore);
  private collectionBD = collection(this.firestore,PATH);

  // getActividades(){
  //   return collectionData(this.collectionBD) as Observable<Actividad[]>
  // }
  getActividades(): Observable<Actividad[]> {
    return collectionData(this.collectionBD) as Observable<Actividad[]>;
  }
  
}
