import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "./firebase.config"

const auth = getAuth(app);

export async function login(email, senha){
    const credential = await signInWithEmailAndPassword(auth, email, senha);
    return credential.user
}

export async function loginGoogle(){
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(auth, provider);
    return credential.user;
}

export async function signUp(email, senha){
    const credential = await createUserWithEmailAndPassword(auth, email, senha);
    return credential.user;
}