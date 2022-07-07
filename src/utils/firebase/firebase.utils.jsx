import {initializeApp} from 'firebase/app';
import { 
    getAuth, 
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
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
  async (userAuth, aditionalInformation = {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try{
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...aditionalInformation
        });
    } catch (error) {
        console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
  };

  export const SignInAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
  };
