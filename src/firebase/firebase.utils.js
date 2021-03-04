import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyASmkDid4jluILwKWUZDe2Dl8w8Y6Igf0w",
    authDomain: "pavilion-style-db.firebaseapp.com",
    projectId: "pavilion-style-db",
    storageBucket: "pavilion-style-db.appspot.com",
    messagingSenderId: "29729332851",
    appId: "1:29729332851:web:c98c5a289c9cf747801406",
    measurementId: "G-SY05N3XV2E"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

// Initialize Firebase
firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();



const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;