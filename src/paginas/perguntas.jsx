import { useState, useEffect } from "react";
import questoes from '../arraydequestoes/questoes';
import Pergunta from "../layout/pergunta";
import Finalizar from "./finalizar";

function Perguntas() {    

    // Contador da pergunta atual---------------------------------------------------------------------
    const [perguntaAtual, setPerguntaAtual] = useState(0);
    const [perguntasSorteadas, setPerguntasSorteadas] = useState([]);
    const [ordemRespostas, setOrdemRespostas] = useState([]);
    const [cartaoResposta, setCartaoResposta] = useState([]);
    const [quantidadeAcertos, setQuantidadeAcertos] = useState(0); 
    const [finalizou, setFinalizou] = useState(false)
    const [conferirRespostas, setConferirRespostas] = useState(false)

    const maximoPerguntas = 10;

    // Alterar a pergunta atual ----------------------------------------------------------------------
    function proximaPergunta() {
        setPerguntaAtual((perguntaAtual + 1) % maximoPerguntas);
    }

    function perguntaAnterior() {
        setPerguntaAtual((perguntaAtual - 1 + maximoPerguntas) % maximoPerguntas);
    }
    
    // Sortear perguntas---------------------------------------------------------------------------------

    useEffect(() => {
        setPerguntasSorteadas(randomizarPerguntas());
    }, []);

    function randomizarPerguntas() {        
        const sorteadas = [];
        while (sorteadas.length < maximoPerguntas) {
            const numeroAleatorio = Math.floor(Math.random() * questoes.length);
            if (!sorteadas.includes(numeroAleatorio)) {
                sorteadas.push(numeroAleatorio);
            }
        }
        return sorteadas;
    }

    // Exibir a pergunta atual-------------------------------------------------------------------------------------
    const perguntaAtualSorteada = perguntasSorteadas.length > 0 ? perguntasSorteadas[perguntaAtual] : null;
    const questao = perguntaAtualSorteada !== null ? questoes[perguntaAtualSorteada] : null;


    //Armazenar Ordem das Respostas-------------------------------------------------------------------------------------
    
    useEffect(() => {
        gerarOrdemRespostas();
      }, []);
    
      // Função para gerar a ordem das respostas
      function gerarOrdemRespostas() {
        const novaOrdem = [];
        const maximoRespostas = 4;
    
        // Loop para criar 30 arrays com 4 números sorteados
        for (let i = 0; i < maximoPerguntas; i++) {
          const resposta = [];
          // Sorteando os números para cada array
          while( resposta.length < maximoRespostas) {
            const numeroAleatorio = Math.floor(Math.random() * maximoRespostas + 1);
            if (!resposta.includes(numeroAleatorio)) {
                resposta.push(numeroAleatorio);
            }
          }
          novaOrdem.push(resposta);
        }
    
        // Atualizando o estado com a nova ordem das respostas
        setOrdemRespostas(novaOrdem);
      }

    // Cartão resposta------------------------------------------------------------------------------
    
    function responder(respostaSelecionada) {        
        if (!conferirRespostas) {const novoCartaoResposta = [...cartaoResposta];
            novoCartaoResposta[perguntaAtual] = respostaSelecionada;
            setCartaoResposta(novoCartaoResposta);
        }else {}
    }

    //Encerrando o simulado------------------------------------------------------------------------
             
    function finalizar() {
        let contador = 0
        for (let i = 0 ; i < maximoPerguntas ; i++) {
            if ( ordemRespostas[i].indexOf(1) === cartaoResposta[i] ){ 
                contador++
            }
        }
        setQuantidadeAcertos(contador)
        if(finalizou === false) {
            setFinalizou(true)
        }else if( finalizou === true) {
            setFinalizou(false)
        }
        
    }

    //Manipulando conferência ---------------------------------------------------------------------

    function Concluir() {        
        setConferirRespostas(true)
    }

    function Conferir() {
        setFinalizou(false)
    }

    //---------------------------------------------------------------------------------------------
    
    

    // Front-end-----------------------------------------------------------------------------------
    return (
        <div>
            {questao && !finalizou && <Pergunta 
            perguntaAnterior={perguntaAnterior}
            proximaPergunta={proximaPergunta}
            finalizar={finalizar}
            conferirRespostas={conferirRespostas}
            cartaoResposta={cartaoResposta}
            perguntaAtual={perguntaAtual} 
            pergunta={questao} 
            resposta={ordemRespostas[perguntaAtual]}
            responder={responder}
            ordemRespostas={ordemRespostas}
             />}
            { finalizou && <Finalizar
            conferirRespostas={conferirRespostas}
             Concluir={Concluir}
             Conferir={Conferir}
             quantidadeAcertos={quantidadeAcertos}
             finalizar={finalizar}
             finalizou={finalizou}
            />               
            }
            
            
        </div>
    );
}

export default Perguntas;
