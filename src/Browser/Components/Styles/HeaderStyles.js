import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    z-index: 2;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    min-height: 70px;
    background-color: white;
    @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
        flex-direction: column;
        height: 200px;
        min-height: 200px;
        position: static;
    }
`;

export const LeftContainer = styled.div`
    padding-left: 20px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
        align-items: center;
        padding-bottom: 15px;
        padding: 30px 0px 15px 0px;
    }
`;

export const LogoContainer = styled(Link)`
    text-decoration: none;
    color: black;
    display: flex;
    font-size: 22px;
    letter-spacing: 1px;
    font-weight: 400;
    flex-direction: column;
    @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
        font-size: 30px;
    }
`;

export const RightContainer = styled.div`
    padding-right: 20px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
        align-items: center;
        padding: 0px;
        flex-grow: 1;
    }
`;

export const LogoTop = styled.div`
    display: flex;
`;

export const LogoBottom = styled.div`
    display: flex;
`;

export const Letter = styled.span`
    flex-grow: 1;
    flex-basis: 0;
`;

export const NavItemContainer = styled.div`
    display: flex;
`;
