
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCWpnfgvLV8YKkxhANRV8gLyVyxBh4vsZs",
    authDomain: "ecomercecoderhosue.firebaseapp.com",
    projectId: "ecomercecoderhosue",
    storageBucket: "ecomercecoderhosue.appspot.com",
    messagingSenderId: "1097228700636",
    appId: "1:1097228700636:web:cd9567ee9d98d873b6dd19",
    measurementId: "G-P7ZMRR3CVT"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


