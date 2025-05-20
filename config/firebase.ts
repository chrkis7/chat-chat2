import Constants from 'expo-constants';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

interface FirebaseConfig {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
}

const config = Constants.expoConfig?.extra as FirebaseConfig

const app: FirebaseApp = initializeApp(config)

export const auth: Auth = getAuth(app)
export const database: Firestore = getFirestore(app)