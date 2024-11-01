import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"dabubble-23476","appId":"1:197777581474:web:e28f9a0c38b14551a4befb","storageBucket":"dabubble-23476.firebasestorage.app","apiKey":"AIzaSyCxQpaEi-ZlQnVB6-PmmJA1GrwweJb_Ouc","authDomain":"dabubble-23476.firebaseapp.com","messagingSenderId":"197777581474","measurementId":"G-PB75N9Z29L"})), provideFirestore(() => getFirestore())]
};
