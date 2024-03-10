import Botao from '../layout/botao'
import { Link } from 'react-router-dom'

function Finalizar({Concluir, Conferir, conferirRespostas,finalizar, quantidadeAcertos}) {
    
    console.log(conferirRespostas)

    return (
        <>            
            {!conferirRespostas && (<div>
                <h4>Tem certeza de que deseja finalizar o simulado?</h4>
                <Botao text={'Concluir'} ativar={Concluir} />
                <Botao text={'Voltar'} ativar={finalizar}/>
            </div>)
            }

            {conferirRespostas && (<div>
                    <h3>Você acertou: {quantidadeAcertos} pergunta{ quantidadeAcertos !== 1 ? 's' : ''}</h3>
                    <Botao text={'Conferir Respostas'} ativar={Conferir} />
                    <Link to={'/'}><Botao text={'Página Inicial'} /></Link>
                </div>)
                
            }

            
            
        </>
    )
}

export default Finalizar