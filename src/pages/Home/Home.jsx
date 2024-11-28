import { Navigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Posts from "../../components/Post/Posts"
import { useAuth } from "../../context/Auth"


export default function Home() {

    const { autenticado } = useAuth();

    if (!autenticado) return <Navigate to='/login' />

    return (
        <>
            <Header />
            <main style={{ flexGrow: '1'}}>
            <h1 style={{textAlign: 'center'}}>Home</h1>
            <Posts />
            </main>
            <Footer />            
        </>
    )
}