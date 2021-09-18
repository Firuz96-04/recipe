import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBYlqlUvl1BoFkdmcnF3dKP0ZoG2PQpOKM",
    authDomain: "recipe-test-frank.firebaseapp.com",
    projectId: "recipe-test-frank",
    storageBucket: "recipe-test-frank.appspot.com",
    messagingSenderId: "477600170752",
    appId: "1:477600170752:web:b4540948bbf0de386f69e5"
  };
  
 const firebaseApp = firebase.initializeApp(firebaseConfig)

 export const db = firebaseApp.firestore()