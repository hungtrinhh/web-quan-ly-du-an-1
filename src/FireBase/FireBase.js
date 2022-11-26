// Import the functions you need from the SDKs you need
import { getDatabase, set, ref, onValue } from 'firebase/database'

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKnbxPWWnqihMN_FCOJ7pR2BxxF7QXlPI",
    authDomain: "duan1firebase.firebaseapp.com",
    databaseURL: "https://duan1firebase-default-rtdb.firebaseio.com",
    projectId: "duan1firebase",
    storageBucket: "duan1firebase.appspot.com",
    messagingSenderId: "406989499199",
    appId: "1:406989499199:web:9a23fe882843ffef48418a",
    measurementId: "G-PMBEWGS3WT"
  };

class User {
    constructor(data, key) {
        this.password = data.password;
        this.id = key
        this.phonenumber = data.phonenumber;
        this.username = data.name;
        this.sodu = data.sodu
    }
}

const app = initializeApp(firebaseConfig);




export default app;




