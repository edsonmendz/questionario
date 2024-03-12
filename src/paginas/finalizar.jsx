import Botao from '../layout/botao'
import { Link } from 'react-router-dom'

function Finalizar({Concluir, Conferir, conferirRespostas,finalizar, quantidadeAcertos}) {
    
    return (
        <>            
            {!conferirRespostas && (<div>
                <h4>Tem certeza de que deseja finalizar o simulado?</h4>
                <Botao text={'Concluir'} ativar={Concluir} classe={'esperando largura25 fonte1em'} />
                <Botao text={'Voltar'} ativar={finalizar} classe={'esperando largura25 fonte1em'} />
            </div>)
            }

            {conferirRespostas && (<div>
                    <h3>Você acertou: {quantidadeAcertos} pergunta{ quantidadeAcertos !== 1 ? 's' : ''}</h3>
                    <Botao text={'Conferir Respostas'} ativar={Conferir} classe={'esperando largura50 fonte1em margemVertical'} />
                    <Link to={'/'}><Botao text={'Página Inicial'} classe={'esperando largura50 fonte1em'} /></Link>
                </div>)
                
            }

            
            
        </>
    )
}

export default Finalizar