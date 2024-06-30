import React from "react";
import { RecoilRoot } from "recoil";
import {render, screen} from '@testing-library/react'
import ListaParticipantes from "./ListaParticipante";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";

jest.mock('../../state/hooks/useListaDeParticipantes', () =>{
    return {
        useListaDeParticipantes: jest.fn()
    }
})
describe("uma vazia preenchida de participantes", () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('Nao deve mostrar nada', ()=>{
        render(
            <RecoilRoot>
                <ListaParticipantes/>
            </RecoilRoot>
        )
    
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(0)
    })
   
})
describe("uma lista preenchida de participantes", () => {
    
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(['Ana', 'Catarina'])
    })
    test('deve retornar a lista', ()=>{
        const participantes = ['Ana', 'Catarina']
        
        render(
            <RecoilRoot>
                <ListaParticipantes/>
            </RecoilRoot>
        )
        
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(participantes.length)
    })
})