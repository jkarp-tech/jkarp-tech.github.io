import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // height: ${props => props.theme.bodyheight};
    width: 100%;
    flex-grow: 1;
`;

export const ContactHeader = styled.div`
    font-size: 25px;
    text-align: center;
    width: 75%;
    padding: 20px;
`;

export const ContactImage = styled.img`
    width: 100%;
`;

export const Email = styled.div`
    font-size: 20px;
    padding: 20px;
    text-align: center;
`;
