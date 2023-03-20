// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZJG4hoCZx6yYaEtDoOY-Q9nu1aAZ5KXw",
  authDomain: "realtor-clone-react-aca6f.firebaseapp.com",
  projectId: "realtor-clone-react-aca6f",
  storageBucket: "realtor-clone-react-aca6f.appspot.com",
  messagingSenderId: "922993299248",
  appId: "1:922993299248:web:d025d24c7d2a25f5dd42f5"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()