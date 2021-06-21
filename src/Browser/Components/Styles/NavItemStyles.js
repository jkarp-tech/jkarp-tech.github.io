import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavItem = styled.div`
    text-align: center;
    padding: 10px 0px;
    border-bottom: ${props => (props.isLocation ? "1px solid black" : "none")};
`;

export const StyledLink = styled(Link)`
    padding: 0px 10px;
    color: black;
    text-decoration: none;
`;
