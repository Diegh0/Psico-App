import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, getDoc } from '@angular/fire/firestore';
import { Emocion } from '../Models/Emociones';
import { Observable, Subject } from 'rxjs';
const PATH = 'Sentimientos';

@Injectable({
  providedIn: 'root'
})
export class EmocionesService {

  constructor() { }
  private firestore = inject(Firestore);
  private collectionBD = collection(this.firestore,PATH);


  getEmociones(){
    return collectionData(this.collectionBD, {idField:"id"}) as Observable<Emocion[]>
  }

}
