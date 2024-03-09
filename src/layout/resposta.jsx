import Botao
 from "./botao";
function Resposta({ letra, resposta, responder, num, cartaoResposta, perguntaAtual }) {    
    
    let classe = cartaoResposta[perguntaAtual] == num ? "resposta largura100" : "esperando largura100" 

    return (                   
            <Botao 
            text={<li><span> {letra +") "}</span>{resposta}</li>} 
            ativar={() => responder(num)}
            classe={classe}
            />        
    );
}

export default Resposta;
