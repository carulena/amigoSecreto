import shuffle from "just-shuffle"
import { useListaDeParticipantes } from "./useListaDeParticipantes"
import { useSetRecoilState } from "recoil"
import { resultadoDoAmigoSecreto } from "../atom"

export const useSorteador = () => {
    const setResultado = useSetRecoilState(resultadoDoAmigoSecreto)
    const participantes = useListaDeParticipantes()
    return ()=>{
        const totalDeParticipantes = participantes.length
        const embaralhado = shuffle(participantes)
        const resultado = new Map <string, string> ()
        for (let index = 0; index < totalDeParticipantes; index++) {
            const indiceDoAmigo = index === (totalDeParticipantes -1) ? 0 : index + 1
            resultado.set(embaralhado[index], embaralhado[indiceDoAmigo])
        }
        setResultado(resultado)
    }
}