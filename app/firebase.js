import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDoVr-wtl5nG3JUqMrI8FmWxGcvQqupB5o",
    authDomain: "food-go-346214.firebaseapp.com",
    projectId: "food-go-346214",
    storageBucket: "food-go-346214.appspot.com",
    messagingSenderId: "271217133753",
    appId: "1:271217133753:web:c3f3b03dfd918fe8eff368",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;