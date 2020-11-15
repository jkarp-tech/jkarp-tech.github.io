import styled from "styled-components";
import { Link }  from  "react-router-dom"

export const HeaderContainer = styled.div`
    z-index: 1;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    min-height: 70px;
    background-color: white;
`;

export const LogoContainer = styled(Link)`
    text-decoration: none;
    color: black;
    display: flex;
    font-size: 25px;
    letter-spacing: 1px;
    font-weight: 400;
    align-items: center;
    padding-left: 20px;
`;

export const Letter = styled.span`
    flex-grow: 1;
    flex-basis: 0;
`;


export const MenuContainer = styled.div`
    color: black;
    flex: 1 1 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
`

export const Icon = styled.img`
    max-width: 40%;
    max-height: 40%;
`