import Botao from "../layout/botao"
import { useState } from "react";
import questoes from '../arraydequestoes/questoes'
import Pergunta from "../layout/pergunta";


function Perguntas() {    

    //contador da pergunta atual -------------------------------------------------------------
    let [perguntaAtual, setPerguntaAtual] = useState(0)
    let [perguntaSorteada, setPerguntaSorteada] = useState([])

    
    //Alterar a pergunta Atual ----------------------------------------------------------------
    function proximaPergunta() {
        if (perguntaAtual === 29 ) {
            setPerguntaAtual(0)            
        }else {            
            setPerguntaAtual(perguntaAtual + 1);
        }
    }

    function perguntaAnterior() {
        if (perguntaAtual === 0 ) {
            setPerguntaAtual(29)            
        }else {            
            setPerguntaAtual(perguntaAtual + 1);
        }
    }
    
    // EM construção --------------------------------------------------------------------------

    for ( let i = 0 ; i < 29 ; i++) {
        let aleat = Math.floor(Math.random() * 30)
        let sorte = []
        sorte.push(aleat)
        console.log(sorte)
    }


    let questao = questoes[perguntaAtual]

    
    // FRONT END -------------------------------------------------------------------------------
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
