import React from "react";

import {
    FooterContainer,
    FooterLine,
    FooterLinks,
    FooterLinksContainer,
    FooterText
} from "./Styles/FooterStyles";

const Footer = () => {
    return (
        <>
            <FooterLine />
            <FooterContainer>
                <FooterText>
                    Copyright © 2021 Lauren Karp Photography LLC - All Rights
                    Reserved.
                </FooterText>
                {/* <FooterLinksContainer>
                    <FooterLinks src={"/Images/instagram.svg"} />
                    <FooterLinks src={"/Images/linkedin.svg"} />
                </FooterLinksContainer> */}
            </FooterContainer>
        </>
    );
};

export default Footer;
