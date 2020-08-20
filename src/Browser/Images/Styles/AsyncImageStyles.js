import styled, { keyframes } from "styled-components";

export const fadein = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const ModalContainer = styled.div`
    z-index: 5;
    height: 100vh;
    width: 100%;
    top: -${window.scrollY}px;
    position: fixed;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #434343ed;
    flex-direction: column;
`;

export const ModalHeaderContainer = styled.div`
    width: 100%;
    max-width: ${(props) => props.theme.breakpoints.xl}px;
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 30px;
    flex-direction: row;
`;

export const ModalImageContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1000px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const ModalImage = styled.img`
    ${({ larger }) => {
        if (larger) {
            return "height: 100%; width: auto;";
        } else {
            return "width: 100%; height: auto;";
        }
    }}
`;

export const ModalInfoContainer = styled.div`
    position: relative;
    ${({ larger }) => {
        if (larger) {
            return "height: 85vw; max-height: 85vh;";
        } else {
            return "width: 90vw; max-height: 85vh; max-width: 1000px;";
        }
    }}

    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
        opacity: 0;
        transition: all 0.5s;
    }
    &:hover:after {
        opacity: 1;
    }
`;

export const Info = styled.div`
    ${({ larger }) => {
        if (larger) {
            return "width: 100%; height: 100%;";
        } else {
            return "height: 100%; width: 90%;";
        }
    }}
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
`;

export const ModalName = styled.div`
    color: white;
    font-size: 10px;
`;

export const ModalDescription = styled.div`
    color: white;
    font-size: 10px;
`;

export const ModalDate = styled.div`
    color: white;
    font-size: 10px;
`;

export const ModalSvg = styled.img`
    height: 35px;
    width: 35px;
    padding-left: 10px;
    &:hover {
        cursor: pointer;
    }
`;

export const Image = styled.img`
    animation: ${fadein} 1s;
    width: ${({ side }) => (side ? "90%" : "100%")};
    height: auto;
    background-color: lightgray;
    &:hover {
        cursor: ${({ side }) => (side ? "pointer" : "")};
    }
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
            return "";
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

export const LoadingImage = styled.img`
    background-color: lightgray;
    width: ${({ side }) => (side ? "90%" : "100%")};
    height: ${({ h, w, totalWidth }) => {
        return (h / w) * 100;
    }}%;
`;
