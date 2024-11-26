import React, { useEffect, useState } from 'react'
import { deleteUser, getUsers, saveUser, updateUser } from '../../firebase/firestore'
import { useForm } from 'react-hook-form'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

export default function Signup(){
    

    const [users, setUsers] = useState([]);

    const { handleSubmit, register, reset } = useForm();
    
    async function newUser(data) {
        await saveUser(data);
        reset();
        findUsers();
    } 

    async function findUsers() {
        const users = await getUsers();
        setUsers(users);
    }

    async function removeUser(id) {
        await deleteUser(id)
        findUsers();
    }

    async function editUser(id) {
        const nome = window.prompt('Digite o novo nome:');
        const email = window.prompt('Digite o novo email:');
        if (nome && email) {
            const data = { nome, email };
            await updateUser(id, data);
            findUsers();
        }
    }


    
    useEffect(() => {
        findUsers();
    }, []);

    return(
        <>
        <Header/>
        <main style={{display: 'flex', flexGrow: 1, justifyContent: 'center'}}>
            <form onSubmit={handleSubmit(newUser)} style={{display: 'flex', flexDirection: 'column', width: '45%', justifyContent: 'center'}}>
                <table border={"2px"}>
                    <thead>
                        <tr>
                            <td>ID </td>
                            <td>Nome</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map(user => {
                        return(
                        <tr key={user.id}>
                            <td> {user.id} </td>
                            <td> {user.nome} </td>
                            <td> {user?.email} </td>
                            <td><button type='button' onClick={ () => editUser(user.id)}>Editar</button></td>
                            <td><button type='button' onClick={ () => removeUser(user.id)}>Excluir</button></td>
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
        </main>
        <Footer />
        </>
    )
}
