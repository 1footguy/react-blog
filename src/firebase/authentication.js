import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./firebase.config"

const auth = getAuth(app);

export async function login(email, password){
    const credential = await signInWithEmailAndPassword(auth, email, password);
    return credential.user
}

export async function loginGoogle(){
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(auth, provider);
    return credential.user;
}

export async function signUp(email, password){
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    return credential.user;
}

export async function userLogged(changeUser){
    onAuthStateChanged(auth, changeUser)
}

export async function logout(){
    await signOut(auth);
}