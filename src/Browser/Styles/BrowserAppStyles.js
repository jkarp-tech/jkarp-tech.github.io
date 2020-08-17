import styled from "styled-components";

export const BrowserAppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    // height: 100vh;
    max-width: ${(props) => props.theme.breakpoints.xl}px;
`;

export const HorizontalCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
