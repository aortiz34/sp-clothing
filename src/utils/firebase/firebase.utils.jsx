import {initializeApp} from 'firebase/app';
import { getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBwD2Z5PYckoIoji8tdgmrX4UKpHaiQPeg",
    authDomain: "sp-clothing-db-6e58a.firebaseapp.com",
    projectId: "sp-clothing-db-6e58a",
    storageBucket: "sp-clothing-db-6e58a.appspot.com",
    messagingSenderId: "941514106066",
    appId: "1:941514106066:web:c3c8ac42f0eeb45a33390b"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => 
  signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = 
  async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());


  if (!userSnapshot.exists()) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try{
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
        });
    } catch (error) {
        console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
  };