import Footer from "../../components/Footer/Footer"
import UserCard from "../../components/UserCard/UserCard"
import Header from "../../components/Header/Header"
import { deleteUser, getUsers, updateUser } from "../../firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/Auth";
import { Navigate } from "react-router-dom";

export default function Users(){

    const { autenticado } = useAuth();
    if (!autenticado) return <Navigate to='/login' />

    const [users, setUsers] = useState([]);

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
    
    
    return (
        <>
            <Header />
            <main style={{flexGrow: 1, textAlign: 'center'}}>
            <table border={'2px'} style={{ margin: 'auto auto'}}>
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
            </main>
            <Footer />
           
        </>
    )
}