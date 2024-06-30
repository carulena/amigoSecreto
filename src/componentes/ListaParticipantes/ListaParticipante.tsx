import styled from "styled-components"
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes"
import './ListaParticipantes.css'
const ListaParticipantes = () => {
    const participantes: string[] = useListaDeParticipantes()
    return (
        <ul className="participantes">
            {participantes.map(participante => 
                <li className="participante" key={participante}>{participante}</li>
            )}
        </ul>
    )
}

export default ListaParticipantes