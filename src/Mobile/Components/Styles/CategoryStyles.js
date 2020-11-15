import styled, { keyframes } from "styled-components";

const fadein = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    animation: ${fadein} 1s;
`;

export const ImageContainer = styled.div`
    flex-direction: column;
    flex: 1 0;
    display: flex;
    align-items: flex-end;
`;