import { Link } from 'react-router-dom'
import './botao.css'

function Botao({ to, text }) {
    return (
        <Link className='btn' to={to}>
            {text}
        </Link>
    )
}

export default Botao