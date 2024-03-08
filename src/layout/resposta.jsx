import Botao
 from "./botao";
function Resposta({ letra, resposta, responder, num }) {     

    return (
        <div>            
            <Botao 
            text={<li><span> {letra +") "}</span>{resposta}</li>} 
            ativar={() => responder(num)}
            />
        </div>
    );
}

export default Resposta;
