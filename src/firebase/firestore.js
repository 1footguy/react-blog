import { useEffect } from "react";
import app from "./firebase.config";
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'


const db = getFirestore(app);

async function save (dados){
    const usuarios = collection(db, "usuarios")
    await addDoc(usuarios, dados);
    console.log("Usuario criado");
}

async function find (){
    const usuarios = collection(db, "usuarios");
    const resultados = await getDocs(usuarios);
    const objetos = [];
    resultados.forEach(doc => {
        const usuario = doc.data();
        usuario.id = doc.id;
        objetos.push(usuario);
    });
    return objetos;
}

export { save, find}