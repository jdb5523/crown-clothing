import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAZxuGjU-lZfkDMVT-GhnrB73aEI5r-HvA",
  authDomain: "crown-clothing-2b4f5.firebaseapp.com",
  projectId: "crown-clothing-2b4f5",
  storageBucket: "crown-clothing-2b4f5.appspot.com",
  messagingSenderId: "496279354706",
  appId: "1:496279354706:web:41a2f2c9481891bad58e8b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;