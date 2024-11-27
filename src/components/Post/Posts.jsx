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
        const author = window.prompt("Digite o novo author:")
        const img = window.prompt("Digite a URL da nova Imagem:")
        if (title && content) {
            const data = {title, content, author, img}
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
    
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" {...register("author")} />
    
                        <label htmlFor="img">Img(URL)</label>
                        <input type="text" id="img" {...register("img")} />
    
                        <button type="submit">Postar</button>
                    </form>
                )}
               
                <ul className="posts">
                    {posts.map(post => {
                        return (
                                <li className="post" key={post.id}>
                                    <p>{post.id}</p>
                                    <h2>{post.title}</h2>
                                    <img src={post.img} />
                                    <p>{post.content}</p>
                                    <p>{post.author}</p>
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