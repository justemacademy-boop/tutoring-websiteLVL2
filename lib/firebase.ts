import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getAuth, type Auth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase only when a real API key is present. During a
// server-side build/prerender where the NEXT_PUBLIC_* env vars may be absent,
// `app` stays undefined and `db`/`auth` are undefined too. That is safe because
// every Firebase call in this app runs client-side (inside effects, event
// handlers and async functions), never during prerender. This exports the REAL
// Firestore/Auth instances so the Firebase SDK's type checks pass at runtime.
const app: FirebaseApp | undefined = firebaseConfig.apiKey
  ? getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApp()
  : undefined;

export const db: Firestore = (app ? getFirestore(app) : undefined) as Firestore;
export const auth: Auth = (app ? getAuth(app) : undefined) as Auth;
