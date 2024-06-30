import React from "react";
import { RecoilRoot } from "recoil";
import Footer from "./Footer";
import { fireEvent, render, screen } from "@testing-library/react";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import { useNavigate } from "react-router-dom";
import { useSorteador } from "../../state/hooks/useSorteador";

jest.mock('../../state/hooks/useListaDeParticipantes', () =>{
    return {
        useListaDeParticipantes: jest.fn()
    }
})

const mockSorteio = jest.fn() 

jest.mock('../../state/hooks/useSorteador', () =>{
    return {
        useSorteador:() => mockSorteio
    }
})

const mockNavegacao = jest.fn() 

jest.mock('react-router-dom', () =>{
    return {
        useNavigate: () => mockNavegacao
    }
})
describe('quando não existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('a brincadeira não pode ser iniciada', () => {
        render(<RecoilRoot>
            <Footer/>
        </RecoilRoot>)
        const botao = screen.getByRole('button')
        expect(botao).toBeDisabled()
    })
})

describe('quando existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(['Ana', 'Catarina', 'Juliana'])
    })
    test('a brincadeira pode ser iniciada', () => {
        render(<RecoilRoot>
            <Footer/>
        </RecoilRoot>)
        const botao = screen.getByRole('button')
        expect(botao).not.toBeDisabled()
    })
    test('a brincadeira foi iniciada', () => {
        render(<RecoilRoot>
            <Footer/>
        </RecoilRoot>)
        const botao = screen.getByRole('button')
        fireEvent.click(botao)
        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
        expect(mockSorteio).toHaveBeenCalledTimes(1)

    })
})