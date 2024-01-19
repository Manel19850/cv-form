// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyDT5v232VCRnr989sB4VFKyKPoXwYTKUAg",
  
    authDomain: "rh-consulting-b892e.firebaseapp.com",
  
    projectId: "rh-consulting-b892e",
  
    storageBucket: "rh-consulting-b892e.appspot.com",
  
    messagingSenderId: "499088521744",
  
    appId: "1:499088521744:web:b7841412f88b87415aa895",
  
    measurementId: "G-ZQSYBL9RNW"
  
  };
  
  

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);  // Utilisez 'app' ici

export { app, firestore };  // Exportez les deux variables
