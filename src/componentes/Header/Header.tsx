import styled from "styled-components";

const Header = () => {
  const HeaderStyled = styled.header`
    background-color: #4b69fd;
    height: 60vh;
    display: flex;
    justify-content: space-around;
    align-items: start;
  `;
  const ImagemLogo = styled.img`
    position: relative;
    top: 10vh
  `;
  const ImagemAvatar = styled.img`
    position: relative;
    top: 5vh
  `;
  return (
    <HeaderStyled>
      <ImagemLogo alt="Logo Sorteador de amigo secreto" src="./imagens/logo.png"/>
      <ImagemAvatar alt="Avatar" src="./imagens/participante.png" />
    </HeaderStyled>
  );
};
export default Header;
