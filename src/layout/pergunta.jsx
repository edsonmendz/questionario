import Resposta from "../layout/resposta";
import Botao from "./botao";
import './resposta.css'
function Pergunta({perguntaAtual, perguntaAnterior, proximaPergunta, finalizar, pergunta, resposta, responder, cartaoResposta, conferirRespostas, ordemRespostas}) { 
    

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
                    conferirRespostas={conferirRespostas}
                    ordemRespostas={ordemRespostas}
                    />
                    <Resposta letra={"B"} 
                    resposta={pergunta[resposta[1]]}
                    responder={responder}
                    num={1}
                    cartaoResposta={cartaoResposta}
                    perguntaAtual={perguntaAtual}
                    conferirRespostas={conferirRespostas}
                    ordemRespostas={ordemRespostas}
                     />
                    <Resposta 
                    letra={"C"} 
                    resposta={pergunta[resposta[2]]} 
                    responder={responder}
                    num={2}
                    cartaoResposta={cartaoResposta}
                    perguntaAtual={perguntaAtual}
                    conferirRespostas={conferirRespostas}
                    ordemRespostas={ordemRespostas}
                    />
                    <Resposta 
                    letra={"D"} 
                    resposta={pergunta[resposta[3]]} 
                    responder={responder}
                    num={3}
                    cartaoResposta={cartaoResposta}
                    perguntaAtual={perguntaAtual}
                    conferirRespostas={conferirRespostas}
                    ordemRespostas={ordemRespostas}
                    />
                </ul>
                <ul>
                <Botao text='Voltar' classe={'esperando largura25 fonte1em'} ativar={perguntaAnterior} />
                <Botao text='Encerrar' classe={'esperando largura25 fonte1em'} ativar={finalizar} />
                <Botao text='Próximo' classe={'esperando largura25 fonte1em'} ativar={proximaPergunta} />
            </ul>
            </div>
        </div>
    )
}

export default Pergunta