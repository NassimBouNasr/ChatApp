import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp( {
  apiKey: "AIzaSyBEs-djqahqfJx7kJ__NHbmDr3-CB1SYB0",
  authDomain: "unichat-6b769.firebaseapp.com",
  projectId: "unichat-6b769",
  storageBucket: "unichat-6b769.appspot.com",
  messagingSenderId: "839662207916",
  appId: "1:839662207916:web:808cc0e94e6c95d2927009"
}).auth();
