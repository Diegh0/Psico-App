import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, getDocs, limit, query } from '@angular/fire/firestore';
import { Frase } from '../Models/Frase';
import { Observable } from 'rxjs';

const PATH="Frases";
const FRASE_KEY = 'frase_aleatoria';

@Injectable({
  providedIn: 'root'
})
export class FrasesService {

  constructor() { }
  private firestore = inject(Firestore);
  private collectionBD = collection(this.firestore,PATH);

  getFrases(){
    return collectionData(this.collectionBD) as Observable<Frase[]>
  }

  async obtenerFraseAleatoria(): Promise<Frase | null> {
    
    const frasesSnapshot = await getDocs(query(this.collectionBD, limit(100))); // Ajusta el límite según tu cantidad de frases
    const frases: Frase[] = [];

    //En esta sección, iteramos sobre cada documento del snapshot obtenido y creamos un array de objetos Frase. 
    //Para cada documento, obtenemos el id del documento (doc.id) y los datos del documento (doc.data())
    frasesSnapshot.forEach(doc => {
      frases.push({ id:  parseInt(doc.id), ...doc.data() } as Frase);
    });

    if (frases.length === 0) return null;

    const indice = Math.floor(Math.random() * frases.length);
    return frases[indice];
  }
  
}