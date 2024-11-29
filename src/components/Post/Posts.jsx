import React, { useState, useEffect } from "react";
import "../../assets/styles.css";
import { deletePost, getPosts, savePost, updatePost } from "../../firebase/firestore";
import { useForm } from "react-hook-form";
import { Button, Card, Form } from "react-bootstrap";

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
                 <button id="postButton" type="button" onClick={() => setFormVisible(!formVisible)} style={{margin: '2rem 0'}}> {!formVisible ? 'Nova publicação' : 'Cancelar'} </button>
                {(formVisible) && (
                    <Form onSubmit={handleSubmit(newPost)} style={{width: '18rem', alignSelf: 'center', margin: '2rem 0'}}>
                        <Form.Group className="mb-3" controlId="titulo">
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control type="text" {...register('title')} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="content">
                            <Form.Label>Content</Form.Label>
                            <Form.Control type="text" {...register('content')} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="titulo">
                            <Form.Label>IMG Url</Form.Label>
                            <Form.Control type="text" {...register('img')} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="titulo">
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control type="text" {...register('author')} />
                        </Form.Group>
                        <Button type="submit" >Postar</Button>
                    </Form>
                )}
               
                <ul className="posts">
                    {posts.map(post => {
                        return (
                            <Card style={{ width: '18rem'}} key={post.id}>
                                <Card.Img variant="top" src={post.img} />
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>{post.content}</Card.Text>
                                    <blockquote>
                                        <footer className="blockquote-footer">
                                           <cite title="Source Title">{post.author}</cite>
                                        </footer>
                                    </blockquote>
                                    <div className="postButtons">
                                        <Button type="button" onClick={() => editPost(post.id)}>Editar</Button>
                                        <Button type="button" onClick={() => removePost(post.id)}>Apagar</Button>   
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    })}
                    </ul>
            </div>
        )}
        </>
      )
}