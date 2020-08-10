import styled from "styled-components";

export const HeaderContainer = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    background-color: white;
`;

export const LeftContainer = styled.div`
    padding-left: 20px;
    display: flex;
    flex-flow: column;
    justify-content: center;
`;

export const LogoContainer = styled.div`
    font-size: 22px;
    letter-spacing: 1px;
    font-weight: 400;
`;

export const RightContainer = styled.div`
    padding-right: 20px;
    display: flex;
    flex-flow: column;
    justify-content: center;
`;

export const NavItemContainer = styled.div`
    display: flex;
`;
