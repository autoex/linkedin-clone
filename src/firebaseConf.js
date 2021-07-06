import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBMoAb4tc074uN0pLvCdXiDA6A5XfHH7uA",
    authDomain: "linkedin-clone-12.firebaseapp.com",
    projectId: "linkedin-clone-12",
    storageBucket: "linkedin-clone-12.appspot.com",
    messagingSenderId: "900521565435",
    appId: "1:900521565435:web:999e9852d02597db7ba45e",
    measurementId: "G-HMDXLMFGWE"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};