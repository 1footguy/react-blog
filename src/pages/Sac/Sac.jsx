import Footer from "../../components/Footer/Footer"
import Form from "../../components/Form/Form"
import Header from "../../components/Header/Header"

export default function Sac(){

    const ajudas = [
        {
            pergunta: "Como criar uma conta no blog?",
            resposta: "Clique no botão 'Cadastrar' no canto superior direito da página, preencha o formulário com seus dados e finalize clicando em 'Criar Conta'."
        },
        {
            pergunta: "Como publicar um post?",
            resposta: "Após fazer login, clique em 'Novo Post', preencha o título, o conteúdo e clique em 'Publicar'."
        },
        {
            pergunta: "Como editar ou excluir um post?",
            resposta: "Acesse sua lista de posts no perfil, clique no botão 'Editar' ou 'Excluir' ao lado do post que deseja modificar."
        },
        {
            pergunta: "Posso salvar posts como rascunho?",
            resposta: "Sim, enquanto estiver criando ou editando um post, você pode clicar em 'Salvar como Rascunho' para salvar sem publicar."
        }
    ];

    return (
        <>
            <Header />
            <main style={{flexGrow: 1, textAlign: 'center'}}>
                <section>
                    <h1>Envie sua pergunta</h1>
                    <br />
                    <Form />
                </section>
        
                <h2>Perguntas frequentes</h2>

                {ajudas.map(ajuda => {
                    return (
                        <div key={ajuda.pergunta} style={{textAlign: 'center'}}>
                        <h3>{ajuda.pergunta}</h3>
                        <p>{ajuda.resposta}</p>
                        </div>
                    )
                })}
            </main>


            <Footer />
        </>
    )
}