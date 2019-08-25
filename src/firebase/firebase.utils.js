import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyAtNm9rNwMUPPkOHDmWGSFnDZ0LrLOAd_I",
  authDomain: "crwn-db-1a49b.firebaseapp.com",
  databaseURL: "https://crwn-db-1a49b.firebaseio.com",
  projectId: "crwn-db-1a49b",
  storageBucket: "",
  messagingSenderId: "352916264266",
  appId: "1:352916264266:web:a06541a7922170aa"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
