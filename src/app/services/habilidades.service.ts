import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Habilidad } from '../Models/Habilidad';
//NOMBRE DE NUESTRA COLECCION DE FIRESTORE
const PATH = 'Habilidades';


@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  constructor() { }
  //Importar firestore
  private firestore = inject(Firestore);
  private collectionBD = collection(this.firestore,PATH);


  getHabilidades(){
    return collectionData(this.collectionBD, {idField:"id"}) as Observable<Habilidad[]>
  }
 

}
