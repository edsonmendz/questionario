import Botao
 from "./botao";
function Resposta({ letra, resposta, responder, num, cartaoResposta, perguntaAtual, conferirRespostas, ordemRespostas }) {    
    
    let classe = 'esperando largura100 margemVertical';

    if (conferirRespostas) {
        if (ordemRespostas[perguntaAtual].indexOf(1) === num) {
            classe = "resposta_certa largura100";
        } else if (cartaoResposta[perguntaAtual] === num) {
            classe = "resposta_errada largura100";
        }
    } else if (cartaoResposta[perguntaAtual] === num) {
        classe = "resposta largura100";
    }

    return (                   
            <Botao 
            text={<li><span> {letra +") "}</span>{resposta}</li>} 
            ativar={() => responder(num)}
            classe={classe}
            />        
    );
}

export default Resposta;
