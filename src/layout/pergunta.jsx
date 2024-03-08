import Resposta from "../layout/resposta";

function Pergunta({perguntaAtual, resposta}) {
    
    return (
        <div>
            <h4><span>{perguntaAtual+ 1 + ") "}</span>{resposta[0]}</h4>
            <div>
                <ul>

                    <Resposta letra={"A"} resposta={resposta[1]} />
                    <Resposta letra={"B"} resposta={resposta[2]} />
                    <Resposta letra={"C"} resposta={resposta[3]} />
                    <Resposta letra={"D"} resposta={resposta[4]} />
                </ul>
            </div>
        </div>
    )
}

export default Pergunta