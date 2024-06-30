import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes"
import styled from "styled-components"
import { FaRegPlayCircle } from "react-icons/fa";
import './Footer.css'
import { useSorteador } from "../../state/hooks/useSorteador";
const Footer=()=>{

    const participantes = useListaDeParticipantes()
    const navegarPara = useNavigate()

    
    const sortear = useSorteador()
    const iniciar = () => {
        sortear()
        navegarPara('/sorteio')
    }

    return (
        <footer className="footer">
            <button 
            className="iniciar"
            disabled={participantes.length < 3}
            onClick={iniciar}> 
                <FaRegPlayCircle size={40}/> 
                Iniciar Brincadeira
                </button>
            <img alt="sacolas" src="./imagens/sacolas.png"/>
        </footer>
    )
}
export default Footer