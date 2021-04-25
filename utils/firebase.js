import { useSetRecoilState } from "recoil";
import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD-fmgsL5e5TSKGz0W_2NWndWCm9Io82Iw",
  authDomain: "tardis-464f3.firebaseapp.com",
  databaseURL: "https://tardis-464f3-default-rtdb.firebaseio.com",
  projectId: "tardis-464f3",
  storageBucket: "tardis-464f3.appspot.com",
  messagingSenderId: "341548056954",
  appId: "1:341548056954:web:5e1a2a9b195339532956c3",
  measurementId: "G-PHYHSXQ37J",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
