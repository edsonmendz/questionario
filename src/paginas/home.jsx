import Botao from "../layout/botao"
import { Link } from "react-router-dom"
function Home() {
    return (
        <div>
            <h1>Questionário Transporte de Produtos Perigosos</h1>
            <br />
            <p>Preare-se para 100 perguntas do Transporte de Produtos perigosos com este simulado</p>
            <br />
            <Link to={'/perguntas'}><Botao text='Começar' classe={'esperando largura50'} /></Link>
            <p>por:Edson Mendes</p>
        </div>
    )
}

export default Home