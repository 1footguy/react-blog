import app from "../../firebase.config";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from 'firebase/firestore'


const db = getFirestore(app);

// CRUD Users

async function saveUser(data) {
    const users = collection(db, "users")
    await addDoc(users, data);
}

async function getUsers() {
    const users = collection(db, "users");
    const resultados = await getDocs(users);
    const objetos = [];
    resultados.forEach(doc => {
        const user = doc.data();
        user.id = doc.id;
        objetos.push(user);
    });
    return objetos;
}

async function deleteUser(id) {
    const users = collection(db, "users");
    const document = doc(users, id);
    await deleteDoc(document);
}

async function updateUser(id, data) {
    const users = collection(db, "users");
    const document = doc(users, id);
    await updateDoc(document, data)
}
// CRUD Posts

async function savePost(data) {
    const posts = collection(db, "posts");
    await addDoc(posts, data);
}

async function getPosts() {
    const posts = collection(db, "posts");
    const resultados = await getDocs(posts);
    const objetos = [];

    resultados.forEach(doc => {
        const post = doc.data();
        post.id = doc.id;
        objetos.push(post);
    });
    return objetos;
} 

async function updatePost(id, data) {
    const posts = collection(db, "posts");
    const document = doc(posts, id);
    await updateDoc(document, data);
}

async function deletePost(id) {
    const posts = collection(db, "posts");
    const document = doc(posts, id);
    await deleteDoc(document);
}



export { saveUser, getUsers, updateUser, deleteUser, savePost, getPosts, deletePost, updatePost}