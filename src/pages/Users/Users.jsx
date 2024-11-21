import Footer from "../../components/Footer/Footer"
import UserCard from "../../components/UserCard/UserCard"
import Header from "../../components/Header/Header"

export default function Users(){
    return (
        <>
            <Header />
            <main style={{flexGrow: 1, textAlign: 'center'}}>

            <h1>Lista de Usuários</h1>
            <UserCard nome="Jonatas de Assis" idade={16} cargo="Desenvolvedor" />
            <UserCard nome="Larissa de Assis" idade={17} cargo="Desenvolvedora" />
            </main>
            <Footer />
           
        </>
    )
}