import { useForm } from "react-hook-form";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function Login() {

    const {handleSubmit, register} = useForm();

    function enviarForm(dados){
        console.log(dados);
    }
    

  return (
    <>
    <Header/>
    <main style={{flexGrow: 1}}>
        <form onSubmit={handleSubmit(enviarForm)}>
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
                    minLength: 8
                })}/>

            </section>
            <button type="submit">Enviar</button>
        </form>
    </main>
    <Footer />
    </>
  )
}
