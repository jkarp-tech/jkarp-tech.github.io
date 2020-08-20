import styled, { keyframes } from "styled-components";

const fadein = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const CategoryContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    animation: ${fadein} 1s;
    @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
        flex-direction: column;
    }
`;

const LeftImageContainer = styled.div`
    flex-direction: column;
    flex: 1 0;
    display: flex;
    align-items: flex-end;
    @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
        align-items: center;
    }
`;

const RightImageContainer = styled.div`
    flex-direction: column;
    flex: 1 0;
    display: flex;
    align-items: flex-start;
    @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
        align-items: center;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    padding: 10px 0px 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export {
    CategoryContainer,
    LeftImageContainer,
    RightImageContainer,
    ImageContainer,
};
