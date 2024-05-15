import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiarioService {

  constructor(private firestore: AngularFirestore) { }

  guardarEntradaDiario(texto: string, fecha: Date, idUsuario: string): Observable<any> {
    // Crear un nuevo documento en la colección "Diarios" con los detalles de la entrada del diario
    const diaryEntry = {
      texto: texto,
      fecha: fecha,
      idUsuario: idUsuario
    };

    return from(this.firestore.collection('Diarios').add(diaryEntry));
  }
}
