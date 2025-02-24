import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore';


const firebaseConfig = {
 apiKey: "AIzaSyCNMkiNNb0te2fl3cYtAW3MeZLsvtoMybs",
  authDomain: "swigyclone-b562d.firebaseapp.com",
  projectId: "swigyclone-b562d",
  storageBucket: "swigyclone-b562d.firebasestorage.app",
  messagingSenderId: "873543027867",
  appId: "1:873543027867:web:cfc6308babd6f4f1ce0a3e",
  measurementId: "G-V9SRSBR47J"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase