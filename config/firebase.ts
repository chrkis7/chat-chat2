import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  Auth,
  getReactNativePersistence,
  initializeAuth
} from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

interface FirebaseConfig {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
}

const config = Constants.expoConfig?.extra as FirebaseConfig;

const app: FirebaseApp = initializeApp(config);

export const auth: Auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const database: Firestore = getFirestore(app);