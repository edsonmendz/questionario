import { Link } from 'react-router-dom'
import './botao.css'

function Botao({ to, text, ativar }) {
    return (
        <Link className='btn' to={to} onClick={ativar}>
            {text}
        </Link>
    )
}

export default Botao