import Botao from "../layout/botao"

function Home() {
    return (
        <div>
            <h1>Questionário TPP</h1>
            <br />
            <p>Preare-se para as perguntas do Transporte de Produtos perigosos com este simulado</p>
            <br />
            <Botao to='/perguntas' text='Começar' />
            <p>por:Edson Mendes</p>
        </div>
    )
}

export default Home