import { initializeApp } from "firebase/app";
import { getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA_XFmyI8Y3pHYKXXcYQQT1ba8Ya81Qvgc",
    authDomain: "winners-church-c5fbc.firebaseapp.com",
    projectId: "winners-church-c5fbc",
    storageBucket: "winners-church-c5fbc.appspot.com",
    messagingSenderId: "406368857175",
    appId: "1:406368857175:web:7ee3b67a343bdb4c0e4712",
    measurementId: "G-5F0GX6ZK04"
  };

  const app = initializeApp(firebaseConfig); 

export  const db = getFirestore(app);



