import React from "react";
import { useLocation } from "react-router-dom";
import { StyledNavItem, StyledLink } from "./Styles/NavItemStyles";

const NavItem = ({ to, children }) => (
    <StyledLink to={to}>
        <StyledNavItem isLocation={useLocation().pathname === to}>
            {children}
        </StyledNavItem>
    </StyledLink>
);
export default NavItem;
