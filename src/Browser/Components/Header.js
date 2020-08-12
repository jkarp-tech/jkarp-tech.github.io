import React from "react";
import {
    HeaderContainer,
    LeftContainer,
    RightContainer,
    NavItemContainer,
    LogoContainer,
} from "./Styles/HeaderStyles";
import NavItem from "./NavItem";

const Header = () => (
    <HeaderContainer>
        <LeftContainer>
            <LogoContainer>
                LAUREN KARP <br /> PHOTOGRAPHY
            </LogoContainer>
        </LeftContainer>
        <RightContainer>
            <NavItemContainer>
                <NavItem to={"/home"}>Home</NavItem>
                <NavItem to={"/birds"}>Birds</NavItem>
                <NavItem to={"/wildlife"}>Wildlife</NavItem>
                <NavItem to={"/nature"}>Nature</NavItem>
                <NavItem to={"/contact"}>Contact</NavItem>
            </NavItemContainer>
        </RightContainer>
    </HeaderContainer>
);
export default Header;
