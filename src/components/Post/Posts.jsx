import React, { useState, useEffect } from "react";
import "../../assets/styles.css";
import { deletePost, getPosts, savePost, updatePost } from "../../firebase/firestore";
import { useForm } from "react-hook-form";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [formVisible, setFormVisible] = useState(false);
    const [carregando, setCarregando] = useState(true);
    const {handleSubmit, register, reset} = useForm();

    async function newPost(data){
        await savePost(data);
        reset(); 
        findPosts();
    }
    
    async function findPosts() {
        const posts = await getPosts();
        setPosts(posts);
    }

    async function removePost(id) {
        await deletePost(id)
        findPosts();
    }

    async function editPost(id){
        const title = window.prompt("Digite o novo título:")
        const content = window.prompt("Digite o novo conteúdo:")
        if (title && content) {
            const data = {title, content}
            await updatePost(id, data);
            findPosts();
        }
    }

    useEffect(() => findPosts, [])

    useEffect(() => {
        setTimeout(() => setCarregando(false), 1000);
      }, []);
    
      return (
        <>
          {carregando ? (
            <p style={{textAlign: 'center'}}>Carregando...</p>
          ) : (
            <div className="postContainer">
                 <button id="postButton" type="button" onClick={() => setFormVisible(!formVisible)}> {!formVisible ? 'Nova publicação' : 'Cancelar'} </button>
                {(formVisible) && (
                    <form className="form" onSubmit={handleSubmit(newPost)} >
    
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" {...register("title")} />
    
                        <label htmlFor="content">Content</label>
                        <input type="text" id="content" {...register("content")} />
    
                        <button type="submit">Postar</button>
                    </form>
                )}
               
                <ul className="posts">
                    {posts.map(post => {
                        return (
                                <li className="post" key={post.id}>
                                    <p>{post.id}</p>
                                    <h2>{post.title}</h2>
                                    <p>{post.content}</p>
                                    <div className="postButtons">
                                        <button type="button" onClick={() => editPost(post.id)}>Editar</button>
                                        <button type="button" onClick={() => removePost(post.id)}>Apagar</button>   
                                    </div>
                                </li>
                        )
                    })}
                    </ul>
            </div>
        )}
        </>
      )
}