import { useForm } from "react-hook-form";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { login, loginGoogle } from "../../firebase/authentication";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const {handleSubmit, register} = useForm();
    const navigate = useNavigate();

    async function enviarForm({email, senha}){
        try {
            await login(email, senha);
            window.alert("logado");
            navigate('/');        
        } catch (error) {
            if (error.code == "auth/invalid-credential") {
                alert("Email ou senha inválidos")
            } else {
                alert("Algo deu errado.")
            }
            console.error({...error});
            
        }
    }

    async function entrarGoogle(){
        try {
            await loginGoogle();
            alert("Login google bem sucedido!")
            navigate("/");
        } catch (error) {
            console.error(error);
            alert("Algo deu errado");
            
        }
    }

  return (
    <>
    <Header/>
    <main style={{flexGrow: 1}}>
        <form onSubmit={handleSubmit(enviarForm)} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw', height: '80vh', justifyContent: 'center'}}>
            <section>
                <label htmlFor="email">Email </label>
                <input type="email" id="email" autoComplete="off" {...register('email', {
                    required: true,
                    minLength: 8
                })}/>

            </section>
            <section>
                <label htmlFor="senha">Senha </label>
                <input type="password" id="senha" {...register('senha', {
                    required: true,
                    minLength: 6
                })}/>

            </section>
            <button type="submit">Enviar</button>
            <button style={{width:'160px'}} type="button" onClick={entrarGoogle}>Entrar com Google</button>
        </form>
    </main>
    <Footer />
    </>
  )
}
