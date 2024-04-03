import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { firebaseProviders } from './firebase.config';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';


export const appConfig: ApplicationConfig = {
  // providers: [provideRouter(routes),firebaseProviders, importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"mental-ht","appId":"1:705019260352:web:30613d549b71ffb6e46c25","storageBucket":"mental-ht.appspot.com","apiKey":"AIzaSyDbqEg5KPzWb0O2Sa36enQZpV0QQZRJpjk","authDomain":"mental-ht.firebaseapp.com","messagingSenderId":"705019260352","measurementId":"G-0P9ERH9VBD"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideStorage(() => getStorage())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"mental-ht","appId":"1:705019260352:web:30613d549b71ffb6e46c25","storageBucket":"mental-ht.appspot.com","apiKey":"AIzaSyDbqEg5KPzWb0O2Sa36enQZpV0QQZRJpjk","authDomain":"mental-ht.firebaseapp.com","messagingSenderId":"705019260352","measurementId":"G-0P9ERH9VBD"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideStorage(() => getStorage())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"mental-ht","appId":"1:705019260352:web:30613d549b71ffb6e46c25","storageBucket":"mental-ht.appspot.com","apiKey":"AIzaSyDbqEg5KPzWb0O2Sa36enQZpV0QQZRJpjk","authDomain":"mental-ht.firebaseapp.com","messagingSenderId":"705019260352","measurementId":"G-0P9ERH9VBD"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
  providers: [provideRouter(routes),
    firebaseProviders]
};
