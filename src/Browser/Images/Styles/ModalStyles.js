import styled, { keyframes } from "styled-components";

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
            return "width: 100%; height: 100%;";
        }
    }}
`;

export const ModalContent = styled.div`
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
        opacity: ${({ show }) => (show ? 1 : 0)};
        transition: all 0.5s;
    }
`;

export const Info = styled.div`
    opacity: ${({ show }) => (show ? 1 : 0)};
    z-index: 1;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
`;

export const ModalName = styled.div`
    color: white;
    font-size: 35px;
    padding: 0px 20px;
`;

export const ModalDescription = styled.div`
    color: white;
    font-size: 25px;
    padding: 0px 20px;
    padding-bottom: 30px;
`;

export const ModalDate = styled.div`
    color: white;
    font-size: 25px;
    padding: 0px 20px;
`;

export const ModalSvg = styled.img`
    height: 35px;
    width: 35px;
    padding-left: 10px;
    &:hover {
        cursor: pointer;
    }
`;
