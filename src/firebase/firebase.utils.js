import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyALza7l_16R0WCErlB4wsVOktW7Pm8rX6w",
  authDomain: "crown-db-35c62.firebaseapp.com",
  databaseURL: "https://crown-db-35c62.firebaseio.com",
  projectId: "crown-db-35c62",
  storageBucket: "crown-db-35c62.appspot.com",
  messagingSenderId: "1050738988494",
  appId: "1:1050738988494:web:df52f510b4740cc1"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // User not logged in.
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('ERROR - Creating User', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
