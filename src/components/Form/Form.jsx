import { useState } from "react";
import debounce from 'lodash.debounce';

export default function Form(){
    const [nome, setNome] = useState("");

    function enviarForm() {
        alert("Formulario enviado");
    }

    function lidarNome(evt) {
        setNome(evt.target.value)
    }
    
    return(
        <div>
            <p>{nome}</p>
            <label htmlFor="nome">Nome</label> <br />
            <input type="text" id="nome" onChange={debounce((evt) => {lidarNome(evt)} , 3000)}/> <br /> <br />


            <label htmlFor="email">Email</label> <br />
            <input type="email" id="email" /> <br /> <br />

            <label htmlFor="mensagem">Mensagem</label> <br />
            <input type="text" id="mensagem" /> <br /> <br />

            <button onClick={enviarForm}>Enviar</button>
        </div>
    )
}