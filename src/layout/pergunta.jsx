import Resposta from "../layout/resposta";

function Pergunta({perguntaAtual, pergunta, resposta, responder}) {
    
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
                    />
                    <Resposta letra={"B"} 
                    resposta={pergunta[resposta[1]]}
                    responder={responder}
                    num={1}
                     />
                    <Resposta 
                    letra={"C"} 
                    resposta={pergunta[resposta[2]]} 
                    responder={responder}
                    num={2}
                    />
                    <Resposta 
                    letra={"D"} 
                    resposta={pergunta[resposta[3]]} 
                    responder={responder}
                    num={3}
                    />
                </ul>
            </div>
        </div>
    )
}

export default Pergunta