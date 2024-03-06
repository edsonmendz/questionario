import React from 'react';
import './perguntas.css'

function PerguntaComponente({ perguntaAtualObjeto, indice, escolherResposta }) {
    if (!perguntaAtualObjeto) {
        return null; // Retorna null se perguntaAtualObjeto for undefined
    }

    return (
        <div>
            <h4><span>{indice + ") "}</span>{perguntaAtualObjeto.pergunta}</h4>
            <div>
                <ul>
                    <li>
                        <button onClick={() => escolherResposta(0)}>
                            <span>A) </span>{perguntaAtualObjeto.r01}
                        </button>
                    </li>
                    <li>
                        <button onClick={() => escolherResposta(1)}>
                            <span>B) </span>{perguntaAtualObjeto.r02}
                        </button>
                    </li>
                    <li>
                        <button onClick={() => escolherResposta(2)}>
                            <span>C) </span>{perguntaAtualObjeto.r03}
                        </button>
                    </li>
                    <li>
                        <button onClick={() => escolherResposta(3)}>
                            <span>D) </span>{perguntaAtualObjeto.r04}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default PerguntaComponente;
