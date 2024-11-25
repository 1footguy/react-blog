import React, { useState, useEffect } from "react";
import "../../assets/styles.css";

export default function Posts({ titulo, conteudo, autor, imagem }) {
    const [likes, setLikes] = useState(0);
    const [deslikes, setDeslikes] = useState(0);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCarregando(false);
        }, 1000);
        
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="post">
            {carregando ? (
                <p>Carregando...</p>
            ) : (
                <>
                    <h2>{titulo}</h2>
                    <p><strong>{conteudo}</strong></p>
                    <img src={imagem} style={{ borderRadius: "10%" }} />
                    <p>Por: {autor}</p>
                    
                    <div className="buttons">
                        <button id="conteudo" onClick={() => {alert(conteudo)}}>Conteudo</button> 
                        <ul style={{listStyle: 'none', gap: '10px'}}>
                            <li>
                                <button onClick={() => setLikes(likes + 1)}>Curtir</button>

                                {likes <= 0 ? (
                                    <p>Sem likes</p>
                                ) : ( 
                                    <p>Likes = {likes}</p>
                                )}
                            </li>
                            <li>
                                <button onClick={() => setDeslikes(deslikes + 1)}>Descurtir</button>

                                {deslikes <= 0 ? (
                                    <p>Sem deslikes</p>
                                ) : ( 
                                    <p>Deslikes = {deslikes}</p>
                            )}
                            </li>
                        </ul>                        
                    </div>

                    {likes >= 10 ? <p>Post popular !</p> : null}
                </>
            )}
        </div>
    )
}