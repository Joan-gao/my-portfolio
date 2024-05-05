// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCXwUZw-qOyHGkFHI1mKR2vtYtp7Zn0EUw',
  authDomain: 'joangao-0917.firebaseapp.com',
  projectId: 'joangao-0917',
  storageBucket: 'joangao-0917.appspot.com',
  messagingSenderId: '1043632546819',
  appId: '1:1043632546819:web:3c39ed8a4c48bb29d55a36',
  measurementId: 'G-QKJHGCTNHF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
