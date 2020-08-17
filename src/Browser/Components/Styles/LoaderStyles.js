import styled, { keyframes } from "styled-components";

const load = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
    &:after {
        border-radius: 50%;
        width: 10em;
        height: 10em;
    }
    border-radius: 50%;
    width: 7em;
    height: 7em;

    margin: 60px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(0, 0, 0, 0.2);
    border-right: 1.1em solid rgba(0, 0, 0, 0.2);
    border-bottom: 1.1em solid rgba(0, 0, 0, 0.2);
    border-left: 1.1em solid #000000;
    transform: translateZ(0);
    animation: ${load} 1.1s infinite linear;
`;

const LoaderCard = styled.div`
    background-color: rgb(220 220 220);
    height: ${(props) => props.theme.bodyheight}px;
    width: 100%;
    display: flex;
    align-items: center;
`;

export { StyledLoader, LoaderCard };
