import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA3I3ouIfLOUCvxQSK2iIpx8zMph_qvhgg",
  authDomain: "react-blog-e5249.firebaseapp.com",
  projectId: "react-blog-e5249",
  storageBucket: "react-blog-e5249.firebasestorage.app",
  messagingSenderId: "778033027858",
  appId: "1:778033027858:web:da4f70d9396e54da5631cb"
};

const app = initializeApp(firebaseConfig);

export default app