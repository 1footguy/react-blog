import React, { useEffect, useState } from 'react'
import { deleteUser, getUsers, saveUser, updateUser } from '../../firebase/firestore'
import { useForm } from 'react-hook-form'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { signUp } from '../../firebase/authentication';
import { useNavigate } from 'react-router-dom';

export default function Signup(){

    const navigate = useNavigate();
    const { handleSubmit, register, reset } = useForm();
    
    async function newUser() {
        try{ 
            const user = await signUp(email, password);
        await saveUser({
            email, 
            nome,
            password,
            authId: user.uid
        });
        reset();
        navigate("/login");
        } catch (error) {
            alert("Algo deu errado")
            console.error(error);
        }
    } 

    return(
        <>
        <Header/>
        <main style={{display: 'flex', flexGrow: 1, justifyContent: 'center'}}>
            <form onSubmit={handleSubmit(newUser)} style={{display: 'flex', flexDirection: 'column', width: '45%', justifyContent: 'center'}}>
                <label htmlFor='username'>Nome </label>
                <input type="text" id="username" {...register("nome")} autoComplete="off" />
                
                <label htmlFor='email'>Email </label>
                <input type="email" id="email" {...register("email")} autoComplete="off" />

                <label htmlFor='password'>Senha </label>
                <input type="password" id="password" {...register("password")}/>


                <button type='submit'>Criar</button>
            </form>
        </main>
        <Footer />
        </>
    )
}