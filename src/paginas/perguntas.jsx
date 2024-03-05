import Botao from "../layout/botao"
import { useState } from "react";


function Perguntas() {
    // questionário importado
    const json = require('../db.json');

    //contador da pergunta atual
    let [perguntaAtual, setPerguntaAtual] = useState(0)

    //Alterar a pergunta Atual

    function proximaPergunta() {
        if (perguntaAtual < 29) {
            setPerguntaAtual(perguntaAtual +1)
        } else {
            setPerguntaAtual(perguntaAtual = 0)
        }
    }

    function perguntaAnterior() {
        if (perguntaAtual > 0) {
            setPerguntaAtual(perguntaAtual - 1)
        } else {
            setPerguntaAtual(perguntaAtual = 29)
        }
    }

    return (
        <div>
            <h4><span>{perguntaAtual+ 1 + ") "}</span>{json[perguntaAtual].pergunta}</h4>
            <div>
                <ul>
                    <li><span>{"A) "}</span>{json[perguntaAtual].r01}</li>
                    <li><span>{"B) "}</span>{json[perguntaAtual].r02}</li>
                    <li><span>{"C) "}</span>{json[perguntaAtual].r03}</li>
                    <li><span>{"D) "}</span>{json[perguntaAtual].r04}</li>
                </ul>
            </div>
            <ul>
                <Botao text='voltar' ativar={perguntaAnterior} />
                <Botao text='encerrar' />
                <Botao text='próximo' ativar={proximaPergunta} />
            </ul>

        </div>
    )
}

export default Perguntas