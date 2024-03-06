import React, { useState, useEffect } from 'react';
import PerguntaComponente from './PerguntaComponente';
import BotaoComponente from './BotaoComponente';

function Perguntas() {
    const json = require('../db.json');
    const [perguntasSorteadas, setPerguntasSorteadas] = useState([]);
    const [respostas, setRespostas] = useState(Array(30).fill(null));
    const [perguntaAtual, setPerguntaAtual] = useState(0);

    useEffect(() => {
        setPerguntasSorteadas(randomizarPerguntas());
    }, []);

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

    function escolherResposta(indiceResposta) {
        const novasRespostas = [...respostas];
        novasRespostas[perguntaAtual] = indiceResposta;
        setRespostas(novasRespostas);
    }

    function proximaPergunta() {
        setPerguntaAtual((perguntaAtual + 1) % 30);
    }

    function perguntaAnterior() {
        setPerguntaAtual((perguntaAtual - 1 + 30) % 30);
    }

    if (perguntasSorteadas.length === 0) {
        return null;
    }

    const perguntaAtualObjeto = json[perguntasSorteadas[perguntaAtual]];

    console.log('perguntaAtualObjeto:', perguntaAtualObjeto); // Adicionado para depuração

    return (
        <div>
            <PerguntaComponente perguntaAtualObjeto={perguntaAtualObjeto} escolherResposta={escolherResposta} />
            <ul>
                <BotaoComponente text='voltar' onClick={perguntaAnterior} />
                <BotaoComponente text='encerrar' />
                <BotaoComponente text='próximo' onClick={proximaPergunta} />
            </ul>
            {/* Para verificar o array de respostas, você pode usar console.log(respostas) */}
        </div>
    );
}

export default Perguntas;
