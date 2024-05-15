import { Injectable} from '@angular/core';
import { Firestore, collection, collectionData, getDocs, query, where } from '@angular/fire/firestore';
import { Video } from '../Models/Video';
import { Observable } from 'rxjs';

const PATH = 'Videos';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(private firestore: Firestore) {}

  private collectionBD = collection(this.firestore, PATH);

  getVideos(): Observable<Video[]> {
    return collectionData(this.collectionBD, { idField: "id" }) as Observable<Video[]>;
  }

  getVideosBySentimiento(sentimiento: string): Observable<any[]> {
    const q = query(this.collectionBD, where('sentimiento', '==', sentimiento));
    return collectionData(q) as Observable<any[]>;
  }
}
