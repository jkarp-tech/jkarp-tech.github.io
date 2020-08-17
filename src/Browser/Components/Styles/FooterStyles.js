import styled from "styled-components";

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px 0px 0px 0px;
    flex-direction: column;
`;

const FooterLine = styled.div`
    border-bottom: 1px solid lightgray;
    width: 80%;
`;

const FooterLinks = styled.img`
    height: 40px;
    width: 40px;
    padding: 10px;
`;

const FooterLinksContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const FooterText = styled.div``;

export {
    FooterContainer,
    FooterLine,
    FooterLinks,
    FooterLinksContainer,
    FooterText,
};
