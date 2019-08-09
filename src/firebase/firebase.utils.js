import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyALza7l_16R0WCErlB4wsVOktW7Pm8rX6w",
  authDomain: "crown-db-35c62.firebaseapp.com",
  databaseURL: "https://crown-db-35c62.firebaseio.com",
  projectId: "crown-db-35c62",
  storageBucket: "",
  messagingSenderId: "1050738988494",
  appId: "1:1050738988494:web:df52f510b4740cc1"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
