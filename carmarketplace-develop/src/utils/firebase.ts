import { initializeApp, getApp } from "@firebase/app";

// Firestore services
import {
  collection,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  collectionGroup,
  getDoc,
  getDocs,
  query,
  arrayRemove,
  arrayUnion,
  where,
  orderBy,
  limit,
  startAfter,
  startAt,
  increment,
  onSnapshot,
  getFirestore,
  Timestamp,
  FieldValue,
  FieldPath,
} from "@firebase/firestore";

// Authentication services
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  confirmPasswordReset,
  updateProfile,
  updateEmail,
  updatePassword,
  sendEmailVerification,
  verifyBeforeUpdateEmail,
  GoogleAuthProvider,
  OAuthProvider,
  EmailAuthProvider,
  reauthenticateWithPopup,
  reauthenticateWithCredential,
  linkWithCredential,
  onAuthStateChanged,
  User,
  Unsubscribe,
  Auth,
  AuthProvider,
} from "@firebase/auth";

// Firebase Storage services
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "@firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
};

// Initialize Firebase app and services
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Export Firebase services
export {
  app,
  initializeApp,
  getApp,
  db,
  auth,
  storage,
  // Firestore
  collection,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  collectionGroup,
  getDoc,
  getDocs,
  query,
  arrayRemove,
  arrayUnion,
  where,
  orderBy,
  limit,
  startAfter,
  startAt,
  increment,
  onSnapshot,
  Timestamp,
  FieldValue,
  FieldPath,
  // Authentication
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  confirmPasswordReset,
  updateProfile,
  updateEmail,
  updatePassword,
  sendEmailVerification,
  verifyBeforeUpdateEmail,
  GoogleAuthProvider,
  OAuthProvider,
  EmailAuthProvider,
  reauthenticateWithPopup,
  reauthenticateWithCredential,
  linkWithCredential,
  onAuthStateChanged,
  type User,
  type Unsubscribe,
  type Auth,
  type AuthProvider,
  // Firebase Storage
  ref,
  getDownloadURL,
  uploadBytes,
  deleteObject,
};
