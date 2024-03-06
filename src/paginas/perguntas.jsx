import Botao from "../layout/botao"
import { useState, useEffect } from "react";

function Perguntas() {
    // questionário importado
    const json = require('../db.json');

    // contador da pergunta atual
    const [perguntaAtual, setPerguntaAtual] = useState(0);

    // contador de estados
    let encerrado = false;

    // Array para armazenar as perguntas sorteadas
    const [perguntasSorteadas, setPerguntasSorteadas] = useState([]);

    // Função para randomizar perguntas
    function randomizarPerguntas() {
        const maximoPerguntas = 30;
        const sorteadas = [];
        while (sorteadas.length < maximoPerguntas) {
            const numeroAleatorio = Math.floor(Math.random() * json.length);
            if (!sorteadas.includes(numeroAleatorio)) {
                sorteadas.push(numeroAleatorio);
            }
        }
        return sorteadas;
    }

    // Chamada para randomizar as perguntas quando o componente é montado
    useEffect(() => {
        setPerguntasSorteadas(randomizarPerguntas());
    }, []);

    // Renderizar o componente somente quando perguntasSorteadas estiver pronto
    if (perguntasSorteadas.length === 0) {
        return null;
    }

    // Função para ir para a próxima pergunta
    function proximaPergunta() {
        if (perguntaAtual < 29) {
            setPerguntaAtual(perguntaAtual + 1);
        } else {
            setPerguntaAtual(0);
        }
    }

    // Função para ir para a pergunta anterior
    function perguntaAnterior() {
        if (perguntaAtual > 0) {
            setPerguntaAtual(perguntaAtual - 1);
        } else {
            setPerguntaAtual(29);
        }
    }

    const perguntaAtualObjeto = json[perguntasSorteadas[perguntaAtual]];

    console.log(json[perguntasSorteadas[perguntaAtual]])

    return (
        <div>
            <h4><span>{perguntaAtual + 1 + ") "}</span>{perguntaAtualObjeto.pergunta}</h4>
            <div>
                <ul>
                    <li><span>{"A) "}</span>{perguntaAtualObjeto.r01}</li>
                    <li><span>{"B) "}</span>{perguntaAtualObjeto.r02}</li>
                    <li><span>{"C) "}</span>{perguntaAtualObjeto.r03}</li>
                    <li><span>{"D) "}</span>{perguntaAtualObjeto.r04}</li>
                </ul>
            </div>
            <ul>
                <Botao text='voltar' ativar={perguntaAnterior} />
                <Botao text='encerrar' />
                <Botao text='próximo' ativar={proximaPergunta} />
            </ul>
        </div>
    );
}

export default Perguntas;
