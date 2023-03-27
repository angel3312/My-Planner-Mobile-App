// Import the functions you need from the SDKs you need
//import * as firebase from "firebase";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACICbwfxWjoVlK5UNjZ6gwOAPLiRMPNSc",
    authDomain: "fir-auth-603ef.firebaseapp.com",
    projectId: "fir-auth-603ef",
    storageBucket: "fir-auth-603ef.appspot.com",
    messagingSenderId: "107138758164",
    appId: "1:107138758164:web:a253abb42f5f0b0e3a9901"
};


//Initialize Firebase 
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };

