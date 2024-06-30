import styled from "styled-components";

const Card: React.FC = ({ children }) => {
    const DivStyled = styled.div`
        background-color: #FFF9EB;
        border: 2px solid #000000;
        box-sizing: border-box;
        padding: 80px;
        height: 100%;
        margin-top: -137px;
        border-radius: 64px 64px 0px 0px;
        display:flex;
        flex:1;
        justify-content: center;
    `
    return(
        <DivStyled>{children}</DivStyled>
)};
export default Card