import { Injectable, inject } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { User } from '../Models/User';
import { Auth } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  firebaseAuth = inject(Auth);

  getAuth(){
    return getAuth;
  }
  signIn(user : User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }
  register(email:string,username:string,password:string): Observable<void>{
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth, 
      email,
      password,
      ).then((response) => updateProfile(response.user, {displayName: username}),
      );
      return from(promise);
  }
}
