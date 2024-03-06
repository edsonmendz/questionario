import Botao from "../layout/botao"
import './perguntas.css'
import { useState, useEffect } from "react";

function Perguntas() {
    // questionário importado
    const json = require('../db.json');

    // contador da pergunta atual
    const [perguntaAtual, setPerguntaAtual] = useState(0);

    // contador de estados
    let encerrado = false;

    // Array para armazenar as perguntas e respostas sorteadas
    const [perguntasSorteadas, setPerguntasSorteadas] = useState([]);
    const [respostasSorteadas, setRespostasSorteadas] = useState([]);
    const [classesEscolhidas, setClassesEscolhidas] = useState([]);

    // Função para randomizar perguntas e respostas
    function randomizarPerguntas() {
        const maximoPerguntas = 30;
        const sorteadas = [];
        while (sorteadas.length < maximoPerguntas) {
            const numeroAleatorio = Math.floor(Math.random() * json.length - 1);
            if (!sorteadas.includes(numeroAleatorio)) {
                sorteadas.push(numeroAleatorio);
            }
        }
        return sorteadas;
    }

    function randomizarRespostas() {
        const maximoRespostas = 4;
        const sorteadas = [];
        while (sorteadas.length < maximoRespostas) {
            const numeroAleatorio = Math.floor(Math.random() * 4);
            if (!sorteadas.includes(numeroAleatorio)) {
                sorteadas.push(numeroAleatorio);
            }
        }
        return sorteadas;
    }

    // Chamada para randomizar as perguntas e respostas quando o componente é montado
    useEffect(() => {
        setPerguntasSorteadas(randomizarPerguntas());
    }, []);

    useEffect(() => {
        setRespostasSorteadas(randomizarRespostas());
    }, []);

    // Renderizar o componente somente quando perguntasSorteadas estiver pronto
    if (perguntasSorteadas.length === 0) {
        return null;
    }
    if (respostasSorteadas.length === 0) {
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

    // Variando a ordem das perguntas
    const perguntaAtualObjeto = json[perguntasSorteadas[perguntaAtual]];
    let resposta1 = 'r0' + (respostasSorteadas[0] + 1)
    let resposta2 = 'r0' + (respostasSorteadas[1] + 1)
    let resposta3 = 'r0' + (respostasSorteadas[2] + 1)
    let resposta4 = 'r0' + (respostasSorteadas[3] + 1)

    function escolher(resposta) {
        // Limpar todas as classes existentes em todos os botões
        document.querySelectorAll('button').forEach(button => {
            button.classList.remove('escolhido');
        });
        // Adicionar a classe 'escolhido' ao botão clicado
        resposta.target.classList.add('escolhido');
    }

    return (
        <div>
            <h3><span>{perguntaAtual + 1 + ") "}</span>{perguntaAtualObjeto.pergunta}</h3>
            <div>
                <ul>
                    <li><button id="r1" onClick={escolher}><span>{"A) "}</span>{perguntaAtualObjeto[resposta1]}</button></li>
                    <li><button id="r2" onClick={escolher}><span>{"B) "}</span>{perguntaAtualObjeto[resposta2]}</button></li>
                    <li><button id="r3" onClick={escolher}><span>{"C) "}</span>{perguntaAtualObjeto[resposta3]}</button></li>
                    <li><button id="r4" onClick={escolher}><span>{"D) "}</span>{perguntaAtualObjeto[resposta4]}</button></li>
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
