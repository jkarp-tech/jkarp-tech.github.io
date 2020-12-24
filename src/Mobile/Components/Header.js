import React, { useState } from "react";

import {
    HeaderContainer,
    LogoContainer,
    Letter,
    MenuContainer,
    Icon
} from "./Styles/HeaderStyles";
import {
    ModalContainer,
    ModalLink,
    ModalLinkContainer,
    FooterContainer,
} from "./Styles/MobileMobileStyles"
import Modal from "../../Browser/Images/Modal"
import Footer from "../../Browser/Components/Footer"

const Header = () => {
    const [clicked, setClicked] = useState(false)
    const WrapString = ({ children }) =>
        children.split("").map((l, i) => {
            return <Letter key={l + i}>{l}</Letter>;
        });

    const Header = () => (
        <HeaderContainer>
            <LogoContainer to={"birds"}>
                <WrapString>Lauren&nbsp;</WrapString>
                <WrapString>Karp&nbsp;</WrapString>
                <WrapString>Photography</WrapString>
            </LogoContainer>
            <MenuContainer>
                <Icon src={"/Images/menu.png"} onClick={() => setClicked(c => !c)}></Icon>
            </MenuContainer>
        </HeaderContainer>
    )

    return (
        <>
        {clicked && (
            <Modal>
                <ModalContainer>
                    <Header/>
                    <ModalLinkContainer>
                        <ModalLink to={"birds"} onClick={
                            () => setClicked(c => !c)
                        }>
                            Birds
                        </ModalLink>
                        <ModalLink to={"wildlife"} onClick={
                            () => setClicked(c => !c)
                        }>
                            Wildlife
                        </ModalLink>
                        <ModalLink to={"nature"} onClick={
                            () => setClicked(c => !c)
                        }>
                            Nature
                        </ModalLink>
                        <ModalLink to={"contact"} onClick={
                            () => setClicked(c => !c)
                        }>
                            Contact
                        </ModalLink>
                    </ModalLinkContainer>
                    <FooterContainer>
                        <Footer />
                    </FooterContainer>
                </ModalContainer>
            </Modal>
        )}
            <Header/>
        </>
    );
};

export default Header;
