import { useRef, useState } from "react";
import { useAdicionarParticipante } from "../../state/hooks/useAdicionarParticipante";
import { useMensagemDeErro } from "../../state/hooks/useMensageDeErro";
import './Formulario.css'
import styled from "styled-components";

const Formulario = () => {
  const [nome, setNome] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    adicionarNaLista(nome);
    setNome("");
    inputRef.current?.focus();
  };
  const adicionarNaLista = useAdicionarParticipante();
  const mensageDeErro = useMensagemDeErro();

  return (
      <form
        onSubmit={(evento) => {
          adicionarParticipante(evento);
        }}
      >
        <input
          className="adicionaParticipante"
          ref={inputRef}
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Insira os nomes dos participantes"
        ></input>
        <button className="addButton" disabled={!nome}>Adicionar</button>
        {mensageDeErro && <p role="alert" className="error">{mensageDeErro}</p>}
      </form>
  );
};
export default Formulario;
