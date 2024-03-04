import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyCmalwN3j3RHC1pDeP9IcKQvCC-TFQItLU",
   authDomain: "foodzone-e2268.firebaseapp.com",
   projectId: "foodzone-e2268",
   storageBucket: "foodzone-e2268.appspot.com",
   messagingSenderId: "299288555647",
   appId: "1:299288555647:web:7bb3e934256e436a578f4a",
   measurementId: "G-S9DVNN7HX9"
 };

const Firebase = initializeApp(firebaseConfig);

export { Firebase };

export const auth = getAuth(Firebase)

export default getFirestore(Firebase);

