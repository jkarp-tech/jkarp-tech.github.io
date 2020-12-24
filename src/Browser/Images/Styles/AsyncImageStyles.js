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
    width: ${({ side }) => (side ? "90%" : "100%")};
    height: 100%;
    background-color: lightgray;
    &:hover {
        cursor: ${({ side }) => (side ? "pointer" : "")};
    }
`;

export const ModalWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #434343ed;
    z-index: 5;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const ImageName = styled.div`
    position: absolute;
    bottom: 0;
    padding: 20px;
    color: white;
`;

export const ImageNameContainer = styled.div`
    opacity: 0;
    position: absolute;
    width: ${({ side }) => (side ? "calc(90% - 9px)" : "100%")};
    height: calc(100% - 10px);
    &:hover {
        cursor: pointer;
        opacity: 1;
        animation: ${fadein} 1s;
        background: rgb(0, 0, 0);
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0) 100%
        );
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    padding: ${({ side }) => {
        if (side) {
            return "0px 5px 10px 5px";
        } else {
            return "0px 0px 10px 0px";
        }
    }};
    width: 100%;
    display: flex;
    justify-content: ${({ side }) => {
        if (side === "left") {
            return "flex-end";
        } else if (side === "right") {
            return "flex-start";
        } else {
            return "center";
        }
    }};
    @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
        justify-content: center;
    }
`;
