import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Posts from "../../components/Post/Posts"



// Criar uma aplicação React com várias páginas, utilizando React Router DOM para a navegação e listas para exibir posts.
// Crie uma página que contém informações sobre o autor do blog ou o propósito do blog. Chame de Sobre.
// Crie uma página "Not Found" personalizada para o blog e mostre quando o usuário acessar uma rota não configurada.
// A navegação entre as páginas deve ser feita com links utilizando o React Router DOM.
// Na página Home, exiba uma lista de posts (ao menos 5 itens). Cada post deve ter um botão clicável e mostrar um alerta com o conteúdo do post.


export default function Home() {
    const posts = [{
        titulo: "Nomeando as variaveis",
        autor: "Jonatas",
        conteudo: "Programar inclui pensar em como outros desenvolvedores irão ler o seu código, portanto opite por nomes claros para funções e variáveis, siga o camelCase, use PascalCase para nomear componentes e/ou classes",
        imagem: "https://saigontechnology.com/wp-content/uploads/clean-code-2.jpg"
    },{
        titulo: "Estruturando funções",
        autor: "Jonatas",
        conteudo: "Ao pensarmos na estrutura da função, é importante definirmos um único propósito para termos funções concisas. Limitar o número de parametros também é importante, tem exceções mas o ideal é não passar de 3 e use nomes de parâmetros auto-descritivos para facilitar a leitura do código",
        imagem: "https://saigontechnology.com/wp-content/uploads/clean-code-3.jpg" 
    },{
        titulo: "Declaração de variáveis",
        autor: "Jonatas",
        conteudo: "Declare variáveis com nomes que reflitam seu propósito, evite usar apenas uma letra como nome de variáveis, exceto em contadores de loop, use const para variáveis que não serão alteradas e let para o caso contrário",
        imagem: "https://saigontechnology.com/wp-content/uploads/clean-code-4.jpg" 
    },{
        titulo: "Formatação do código",
        autor: "Jonatas",
        conteudo: "Mantenha a indentação consistente para melhorar a legibilidade e a manutenção do código. Agrupe blocos de código relacionados e separe-os com linhas em branco para facilitar a navegação. Limite o comprimento das linhas para melhorar a leitura.",
        imagem: "https://saigontechnology.com/wp-content/uploads/clean-code-5.jpg" 
    },{
        titulo: "Modularização",
        autor: "Jonatas",
        conteudo: "Divida o código em módulos ou componentes reutilizáveis. Use sistemas de módulos (ex.: CommonJS, ES6) para organizar e encapsular o código. Siga o princípio da separação de responsabilidades, mantendo lógica, apresentação e dados independentes.",
        imagem: "https://saigontechnology.com/wp-content/uploads/clean-code-7.jpg"
    },{
        titulo: "Lidando com falhas e exceções",
        autor: "Jonatas",
        conteudo: "Garanta um tratamento adequado de erros e registros robustos no seu código. Utilize blocos try-catch para gerenciar exceções de forma adequada. Certifique-se de que suas mensagens de erro sejam úteis para fins de depuração.",
        imagem: "https://saigontechnology.com/wp-content/uploads/clean-code-6.jpg" 
    
    }]
    return (
        <>
            <Header />
            <main style={{ flexGrow: '1'}}>
            <h1 style={{textAlign: 'center'}}>Home</h1>
            {posts.map(post => {
                return(
                <div key={post.titulo}>
                    <Posts {...post}/>
                </div>
                )
            })}
            </main>
            <Footer />            
        </>
    )
}