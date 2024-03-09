import './botao.css'

function Botao({ to, text, ativar,classe }) {
    return (
        <button className={classe} to={to} onClick={ativar}>{text}</button>        
    )
}

export default Botao