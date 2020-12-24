import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const fadein = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const ModalContainer = styled.div`
    z-index: 11;
    height: 100vh;
    width: 100%;
    top: 0;
    display: flex;
    position: fixed;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    animation: ${fadein} 1s;
    background-color: white;
`;

export const ModalLinkContainer = styled.div`
    padding-top: 20%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const ModalLink = styled(Link)`
    font-size: 30px;
    padding-top: 10px;
    text-decoration: none;
    color: black;
`

export const FooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`