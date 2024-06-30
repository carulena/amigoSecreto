import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario";

//Jest
describe("o comportamento do Formulário.tsx", () => {
  test("quando o input está vazio, novos participantes não podem ser adicionados", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    //encontrar no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    //encontrar o botão
    const botao = screen.getByRole("button");
    //garantir que o input esteja no documento
    expect(input).toBeInTheDocument();
    //garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled();
  });

  test("adicionar um participante caso exista um nome preenchido", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    //encontrar no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    //encontrar o botão
    const botao = screen.getByRole("button");
    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    //clicar no botão de submeter
    fireEvent.click(botao);

    //garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus();
    //garantir que o input não tenha um valor
    expect(input).toHaveValue("");
  });

  test("nomes duplicados não podem ser adicionados na lista", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    //encontrar no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    //encontrar o botão
    const botao = screen.getByRole("button");
    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    //clicar no botão de submeter
    fireEvent.click(botao);

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });

    fireEvent.click(botao);

    const mensageDeErro = screen.getByRole("alert");

    expect(mensageDeErro.textContent).toBe(
      "Nomes duplicados não são permitidos"
    );
  });

  test("a mensagem de erro deve sumir após os timers", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    //encontrar no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    //encontrar o botão
    const botao = screen.getByRole("button");
    
    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    //clicar no botão de submeter
    fireEvent.click(botao);

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });

    fireEvent.click(botao);

    let mensageDeErro = screen.queryByRole("alert");

    expect(mensageDeErro).toBeInTheDocument();
    //esperar N segundos
    act(() => {
      jest.runAllTimers();
    });

    mensageDeErro = screen.queryByRole("alert");
    expect(mensageDeErro).toBeNull();
  });
});
