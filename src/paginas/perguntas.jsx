import Botao from "../layout/botao"

function Perguntas() {
    return (
        <div>
            <h4><span>01</span> Pergunta a ser respondida, ela pode ser bem curta, ou pode ser gigantesca, o importante é que o texto tenha quebra de linha em qualquer situação ou tamanho de tela, além disso, que funcione muito bem sem quebrar a página.</h4>
            <div>
                <ul>
                    <li><span>A</span> Resposta numero 1</li>
                    <li><span>B</span> Resposta numero 2</li>
                    <li><span>C</span> Resposta numero 3</li>
                    <li><span>D</span> Resposta numero 4</li>
                </ul>
            </div>
            <ul>
                <Botao text='voltar' />
                <Botao text='encerrar' />
                <Botao text='próximo' />
            </ul>

        </div>
    )
}

export default Perguntas