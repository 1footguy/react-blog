import React, { useEffect, useState } from 'react'
import { save, find } from '../../firebase/firestore'
import { useForm } from 'react-hook-form'

export default function Signup(){
    

    const [usuarios, setUsuarios] = useState([]);

    const { handleSubmit, register, reset } = useForm();
    
    async function novoUsuario(dados) {
        await save(dados);
        reset();
        findUsers();
    }

    async function findUsers() {
        const usuarios = await find();
        setUsuarios(usuarios);
    }


    
    useEffect(() => {
        findUsers();
    }, []);

    return(
        <form onSubmit={handleSubmit(novoUsuario)} style={{display: 'flex', flexDirection: 'column', width: '30%', alignSelf: 'center'}}>
            <table>
                <thead>
                    <tr>
                        <td>ID </td>
                        <td>Nome</td>
                    </tr>
                </thead>
                <tbody>
                {usuarios.map(user => {
                    return(
                    <tr key={user.id}>
                        <td> {user.id} </td>
                        <td> {user.nome} </td>
                    </tr>
                )})}
                </tbody>
            </table>
            <label htmlFor='username'>Nome </label>
            <input type="text" id="username" {...register("nome")} />
            
            <label htmlFor='email'>Email </label>
            <input type="email" id="email" {...register("email")}/>

            <label htmlFor='password'>Senha </label>
            <input type="password" id="password" {...register("password")}/>


            <button>Criar</button>
        </form>
    )
}
