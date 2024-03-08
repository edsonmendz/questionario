import './perguntas.css'
import React, { useState, useEffect } from 'react';

function PerguntaComponente({ perguntaAtualObjeto, indice, escolherResposta, respostaSelecionada }) {
    const [respostaSelecionadaLocal, setRespostaSelecionadaLocal] = useState(respostaSelecionada);

    useEffect(() => {
        setRespostaSelecionadaLocal(respostaSelecionada);
    }, [respostaSelecionada]);

    const handleClick = (indiceResposta) => {
        escolherResposta(indiceResposta);
        setRespostaSelecionadaLocal(indiceResposta);
    };

    // Define a classe condicionalmente com base na resposta selecionada e no estado da pergunta atualmente respondida
    const getClass = (indiceResposta) => {
        if (respostaSelecionadaLocal === indiceResposta) {
            return 'selecionada';
        }
        if (respostaSelecionada !== null) {
            return 'resposta-respondida';
        }
        return '';
    };

    function recuperarResposta() {
        
    }

    return (
        <div>
            <h4>{indice + ") " + perguntaAtualObjeto.pergunta}</h4>
            <div>
                <ul>
                    <li onClick={() => handleClick(1)} className={getClass(1)}>{"A) " + perguntaAtualObjeto.r01}</li>
                    <li onClick={() => handleClick(2)} className={getClass(2)}>{"B) " + perguntaAtualObjeto.r02}</li>
                    <li onClick={() => handleClick(3)} className={getClass(3)}>{"C) " + perguntaAtualObjeto.r03}</li>
                    <li onClick={() => handleClick(4)} className={getClass(4)}>{"D) " + perguntaAtualObjeto.r04}</li>
                </ul>
            </div>
        </div>
    );
}

export default PerguntaComponente;
