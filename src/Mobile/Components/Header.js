import React from "react";

import {
    HeaderContainer,
    LogoContainer,
    Letter,
    MenuContainer,
    Icon,
} from "./Styles/HeaderStyles";

const Header = () => {
    const WrapString = ({ children }) =>
        children.split("").map((l, i) => {
            return <Letter key={l + i}>{l}</Letter>;
        })

    return (
        <HeaderContainer>
            <LogoContainer to={"home"}>
                <WrapString>Lauren&nbsp;</WrapString>
                <WrapString>Karp&nbsp;</WrapString>
                <WrapString>Photography</WrapString>
            </LogoContainer>
            <MenuContainer>
                <Icon src={"/Images/menu.png"}></Icon>
            </MenuContainer>
        </HeaderContainer>
    );
};

export default Header;
