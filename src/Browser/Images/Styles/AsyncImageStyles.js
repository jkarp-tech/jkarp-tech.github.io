import styled, { keyframes } from "styled-components";

export const fadein = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const Image = styled.img`
    animation: ${fadein} 1s;
    width: 90%;
    height: auto;
    background-color: lightgray;
`;

export const ImageContainer = styled.div`
    padding: 0px 5px 10px 5px;
    width: 100%;
    display: flex;
    justify-content: ${({ side }) =>
        side === "left" ? "flex-end" : "flex-start"};
    @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
        justify-content: center;
    }
`;

export const LoadingImage = styled.img`
    background-color: lightgray;
    width: 90%;
    height: ${({ h, w, totalWidth }) => {
        return (h / w) * 100;
    }}%;
`;
