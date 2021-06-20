import React, { useState } from "react";

import {
    HeaderContainer,
    LogoContainer,
    Letter,
    MenuContainer,
    Icon
} from "./Styles/HeaderStyles";

import Footer from "../../Browser/Components/Footer"

const Header = ({showNav}) => {
    const setClicked = showNav[1]
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
            <Header/>
    );
};

export default Header;
