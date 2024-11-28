import { createContext, useContext, useEffect, useState } from "react";
import { userLogged } from "../firebase/authentication";

const AuthContext = createContext();


// permissão para acessar o contexto
function AuthProvider( { children } ){

    const [carregando, setCarregando] = useState(true);
    const [autenticado, setAutenticado] = useState(false);
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        userLogged(user => {
            setUsuario(user);
            setAutenticado(user ? true : false);
            setCarregando(false);
        });
    }, [])

    if (carregando) return <div>Carregando...</div>;

    return(
        <AuthContext.Provider value={{autenticado, setAutenticado, usuario}}>
            {children}
        </AuthContext.Provider>
    )
}
// permite acessar os estados e funções fornecidos pelo contexto
function useAuth(){
    return useContext(AuthContext);    
}

export { AuthProvider, useAuth }
