import styled, { keyframes } from "styled-components";

const fadein = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Image = styled.img`
    animation: ${fadein} 0.5s;
    width: 90%;
    height: 100%;
`;

const ImageContainer = styled.div`
    padding: 0px 5px 10px 5px;
    width: 100%;
    display: flex;
    justify-content: ${({ side }) =>
        side === "left" ? "flex-end" : "flex-start"};
    @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
        justify-content: center;
    }
`;

export { Image, ImageContainer };
