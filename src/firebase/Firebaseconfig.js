import firebase from "firebase/compat/app"
import  "firebase/compat/auth";

const firebaseConfig = {
   apiKey: "AIzaSyDrS3DH-eD2KjQchemeaHnZGT_qpTXAaw8",
   authDomain: "olhx-70003.firebaseapp.com",
   projectId: "olhx-70003",
   storageBucket: "olhx-70003.appspot.com",
   messagingSenderId: "442561659593",
   appId: "1:442561659593:web:3f5a5d95d774ec6ce9c318",
   measurementId: "G-1T5RRQM3N9"
 };

 const server = firebase.initializeApp(firebaseConfig);
 const auth = server.auth();
 const provider = new firebase.auth.GoogleAuthProvider();


 export {auth, provider}