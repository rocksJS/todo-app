import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore } from 'firebase/firestore';

export const environment = {
  apiURL: 'https://todo-app-d9cb5-default-rtdb.firebaseio.com/',
  production: false,
  firebase: {
    apiKey: 'AIzaSyCCaP849PeM79HJ2fzhORO6oqkfalnb3c4',
    authDomain: 'todo-app-d9cb5.firebaseapp.com',
    databaseURL: 'https://todo-app-d9cb5-default-rtdb.firebaseio.com',
    projectId: 'todo-app-d9cb5',
    storageBucket: 'todo-app-d9cb5.appspot.com',
    messagingSenderId: '645059877621',
    appId: '1:645059877621:web:04ac1b29e2f295918583bc',
    measurementId: 'G-2V7K7FF5F3',
  },
};

export const app = initializeApp(environment.firebase);
export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
