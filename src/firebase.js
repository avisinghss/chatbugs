import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC80cO_DTdOCVsa8RqTUBjXk6BSBdHCLQo",
  authDomain: "chatbugs-166ca.firebaseapp.com",
  projectId: "chatbugs-166ca",
  storageBucket: "chatbugs-166ca.appspot.com",
  messagingSenderId: "795142501581",
  appId: "1:795142501581:web:d8afd94104f77fc6492584",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();