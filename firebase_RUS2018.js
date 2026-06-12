import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

const hasFirebaseConfig = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);

export const db = hasFirebaseConfig
  ? getFirestore(initializeApp(firebaseConfig, 'russia2018'))
  : null;

export { doc, getDoc, setDoc };

if (!hasFirebaseConfig) {
  console.warn('Firebase no está configurado. Se usará almacenamiento local en este navegador.');
}
