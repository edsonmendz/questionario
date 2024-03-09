import Resposta from "../layout/resposta";
import './resposta.css'
function Pergunta({perguntaAtual, pergunta, resposta, responder, cartaoResposta}) { 
    

    return (
        <div>
            <h4><span>{perguntaAtual+ 1 + ") "}</span>{pergunta[0]}</h4>
            <div>
                <ul>
                    <Resposta 
                    letra={"A"} 
                    resposta={pergunta[resposta[0]]}
                    responder={responder}
                    num={0}
                    cartaoResposta={cartaoResposta}
                    perguntaAtual={perguntaAtual}
                    />
                    <Resposta letra={"B"} 
                    resposta={pergunta[resposta[1]]}
                    responder={responder}
                    num={1}
                    cartaoResposta={cartaoResposta}
                    perguntaAtual={perguntaAtual}
                     />
                    <Resposta 
                    letra={"C"} 
                    resposta={pergunta[resposta[2]]} 
                    responder={responder}
                    num={2}
                    cartaoResposta={cartaoResposta}
                    perguntaAtual={perguntaAtual}
                    />
                    <Resposta 
                    letra={"D"} 
                    resposta={pergunta[resposta[3]]} 
                    responder={responder}
                    num={3}
                    cartaoResposta={cartaoResposta}
                    perguntaAtual={perguntaAtual}
                    />
                </ul>
            </div>
        </div>
    )
}

export default Pergunta