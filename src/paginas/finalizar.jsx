import Botao from '../layout/botao'

function Finalizar(finalizou, conferirRespostas) {
    return (
        <>
            <div>
                <h4>Tem certeza de que deseja finalizar o simulado?</h4>
                <Botao text={'Concluir'} />
                <Botao text={'Voltar'}/>
            </div>
            <div>
                <h3>Você acertou: {finalizou} pergunta{ finalizou != 1 ? 's' : ''}</h3>
                <Botao text={'Conferir Respostas'} />
                <Botao text={'Página Inicial'} />
            </div>
            
        </>
    )
}

export default Finalizar