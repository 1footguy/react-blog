import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function About(){
    return(
        <>
            <Header />
            <main style={{flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center'}}>
                <section style={{width: '50%'}}>
                    <h2>Sobre o Blog</h2>
                    <p>Bem-vindo ao nosso blog! Aqui, compartilhamos dicas valiosas sobre boas práticas de programação e como melhorar a qualidade do seu código. O objetivo deste blog é ajudar desenvolvedores a escreverem códigos mais limpos, organizados e fáceis de manter.</p>
                </section>
            </main>
            <Footer />
        </>
    )
}