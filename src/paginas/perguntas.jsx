import Botao from "../layout/botao";
import { useState, useEffect } from "react";
import questoes from '../arraydequestoes/questoes';
import Pergunta from "../layout/pergunta";

function Perguntas() {    

    // Contador da pergunta atual---------------------------------------------------------------------
    const [perguntaAtual, setPerguntaAtual] = useState(0);
    const [perguntasSorteadas, setPerguntasSorteadas] = useState([]);
    const [ordemRespostas, setOrdemRespostas] = useState([]);
    const [cartaoResposta, setCartaoResposta] = useState([])

    // Alterar a pergunta atual ----------------------------------------------------------------------
    function proximaPergunta() {
        setPerguntaAtual((perguntaAtual + 1) % 30);
    }

    function perguntaAnterior() {
        setPerguntaAtual((perguntaAtual - 1 + 30) % 30);
    }
    
    // Sortear perguntas---------------------------------------------------------------------------------

    useEffect(() => {
        setPerguntasSorteadas(randomizarPerguntas());
    }, []);

    function randomizarPerguntas() {
        const maximoPerguntas = 30;
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
        for (let i = 0; i < 30; i++) {
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
        const novoCartaoResposta = [...cartaoResposta];
        novoCartaoResposta[perguntaAtual] = respostaSelecionada;
        setCartaoResposta(novoCartaoResposta);
    }

    console.log(cartaoResposta)

    // Front-end-----------------------------------------------------------------------------------
    return (
        <div>
            {questao && <Pergunta 
            perguntaAtual={perguntaAtual} 
            pergunta={questao} 
            resposta={ordemRespostas[perguntaAtual]}
            responder={responder}
             />}
            <ul>
                <Botao text='voltar' classe={'btn'} ativar={perguntaAnterior} />
                <Botao text='encerrar' classe={'btn'} />
                <Botao text='próximo' classe={'btn'} ativar={proximaPergunta} />
            </ul>
        </div>
    );
}

export default Perguntas;
