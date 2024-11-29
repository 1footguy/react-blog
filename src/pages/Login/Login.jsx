import { useForm } from "react-hook-form";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { login, loginGoogle } from "../../firebase/authentication";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { Button } from "react-bootstrap";

export default function Login() {

    const {handleSubmit, register} = useForm();
    const navigate = useNavigate();

    const { setAutenticado } = useAuth();

    async function enviarForm({email, senha}){
        try {
            await login(email, senha);
            setAutenticado(true);
            navigate('/');        
        } catch (error) {
            if (error.code == "auth/invalid-credential") {
                alert("Email ou senha inválidos")
            } else {
                alert("Algo deu errado.")
            }
            console.error(error);
            
        }
    }

    async function entrarGoogle(){
        try {
            await loginGoogle();
            setAutenticado(true);
            navigate("/");
        } catch (error) {
            console.error(error);
            alert("Algo deu errado");
        }
    }

  return (
    <>
    <Header/>
    <main className="flex-grow-1 align-items-center d-flex flex-column justify-content-center">
        <h1>Acesse sua conta</h1>
        <form onSubmit={handleSubmit(enviarForm)} className="d-flex flex-column w-50 ">
                <label htmlFor="email">Email </label>
                <input type="email" id="email" autoComplete="off" {...register('email', {
                    required: true,
                    minLength: 8
                })}/>

                <label htmlFor="senha">Senha </label>
                <input type="password" id="senha" {...register('senha', {
                    required: true,
                    minLength: 6
                })}/>

            <Button style={{width:'200px', alignSelf: 'center'}} type="submit" variant="outline-dark">Entrar</Button>
            <Button style={{width:'200px', alignSelf: 'center'}} type="button" variant="dark" onClick={entrarGoogle}>Entrar com Google</Button>
        </form>
    </main>
    <Footer />
    </>
  )
}
