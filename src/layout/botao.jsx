import { Link } from 'react-router-dom'
import './botao.css'

function Botao({ to, text, ativar,classe }) {
    return (
        <Link className={classe} to={to} onClick={ativar}>
            {text}
        </Link>
    )
}

export default Botao