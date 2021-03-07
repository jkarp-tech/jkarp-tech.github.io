import React from 'react'
import {
    HeaderContainer,
    LeftContainer,
    RightContainer,
    NavItemContainer,
    LogoContainer,
    Letter,
    LogoTop,
    LogoBottom,
} from './Styles/HeaderStyles'
import NavItem from './NavItem'

const Header = () => {
    const WrapString = ({ children }) =>
        children.split('').map((l, i) => {
            return <Letter key={l + i}>{l}</Letter>
        })

    return (
        <HeaderContainer>
            <LeftContainer>
                <LogoContainer to={'home'}>
                    <LogoTop>
                        <WrapString>LAUREN KARP</WrapString>
                    </LogoTop>
                    <LogoBottom>
                        <WrapString>PHOTOGRAPHY</WrapString>
                    </LogoBottom>
                </LogoContainer>
            </LeftContainer>
            <RightContainer>
                <NavItemContainer>
                    <NavItem to={'/home'}>home</NavItem>
                    <NavItem to={'/birds'}>birds</NavItem>
                    <NavItem to={'/wildlife'}>wildlife</NavItem>
                    <NavItem to={'/nature'}>nature</NavItem>
                    <NavItem to={'/favorites'}>favorites</NavItem>
                    <NavItem to={'/contact'}>contact</NavItem>
                </NavItemContainer>
            </RightContainer>
        </HeaderContainer>
    )
}
export default Header
