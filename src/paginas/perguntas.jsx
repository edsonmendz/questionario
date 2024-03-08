import Botao from "../layout/botao"
import { useState } from "react";
import questoes from '../arraydequestoes/questoes'
import Pergunta from "../layout/pergunta";


function Perguntas() {    

    //contador da pergunta atual
    let [perguntaAtual, setPerguntaAtual] = useState(0)
    
    //Alterar a pergunta Atual

    function proximaPergunta() {
        setPerguntaAtual((perguntaAtual + 1) % 30);
    }

    function perguntaAnterior() {
        setPerguntaAtual((perguntaAtual - 1 + 30) % 30);
    }
    
    let questao = questoes[perguntaAtual]
    
    
    return (
        <div>
            <Pergunta perguntaAtual={perguntaAtual} resposta={questao} />
            <ul>
                <Botao text='voltar' ativar={perguntaAnterior} />
                <Botao text='encerrar' />
                <Botao text='próximo' ativar={proximaPergunta} />
            </ul>
        </div>
    )

    
}

export default Perguntas;
