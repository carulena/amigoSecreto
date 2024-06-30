import styled from "styled-components"
import Formulario from "../../componentes/Fomulario/Formulario"
import Footer from "../../componentes/Footer/Footer"
import ListaParticipantes from "../../componentes/ListaParticipantes/ListaParticipante"
import './Configuracao.css'
const Configuracao = () => {

    return (
        <div className="config">
            <Formulario/>
            <ListaParticipantes/>
            <Footer/>
        </div>
    )
}

export default Configuracao