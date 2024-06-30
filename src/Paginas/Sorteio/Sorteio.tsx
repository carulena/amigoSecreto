import { useState } from "react"
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes"
import { useResultadoSorteio } from "../../state/hooks/useResultadoDoSorteio"
import { FaDiceFive } from "react-icons/fa";
import './Sorteio.css'
const Sorteio = () => {
    const resultado = useResultadoSorteio()
    const participantes = useListaDeParticipantes()
    
    const [participanteDaVez, setParticipanteDaVez] = useState('')
    const [amigoSecreto, setAmigoSecreto] = useState('')
    const sortear = (evento:  React.FormEvent<HTMLFormElement>)=> {
        evento.preventDefault()
        if(resultado.has(participanteDaVez)){
            setAmigoSecreto(resultado.get(participanteDaVez)!)
        }
    }
    return (
        <section>
            <form className="formulario" key="sorteio" onSubmit={evento => { sortear(evento)}}>
                <select 
                    className="selectNome"
                    required
                    name="participanteDaVez" 
                    id="participanteDaVez" 
                    placeholder="Selecione o seu nome"
                    value={participanteDaVez}
                    onChange={evento => setParticipanteDaVez(evento.target.value)}>
                        
                    <option>Selecione Seu Nome</option>
                    {
                        participantes.map((participante) => 
                            <option value={participante} 
                        key={participante}>{participante}</option>
                        )
                    }
                </select>
                <p className="helper">Clique em em sortear para ver quem é seu amigo secreto!</p>
                <button className="botaoSortear"> <FaDiceFive size={40}/>
                Sortear!</button>
            </form>
            {amigoSecreto && <p className="amigoSorteado" role="alert">Seu amigo secreto é: <b>{amigoSecreto}</b></p>}
            <div  className="aviao"><img alt="aviao" src="./imagens/aviao.png"/></div>
        </section>
    )
}

export default Sorteio