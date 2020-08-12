import styled from "styled-components";

const SignInContainer = styled.div`
    height: ${(props) => props.theme.bodyheight};
    display: flex;
    flex-flow: column;
    align-items: center;
`;

const Header = styled.div`
    font-size: 30px;
    margin: 30px 0px;
`;

const Email = styled.input`
    border-radius: 5px;
    font-size: 24px;
    margin: 5px;
`;

const Password = styled.input`
    border-radius: 5px;
    font-size: 24px;
    margin: 5px;
`;

const Submit = styled.button`
    border-radius: 5px;
    font-size: 20px;
    background: transparent;
    transition: 0.5s;
    margin: 5px;

    &:hover {
        background-color: ${(props) => props.theme.colors.accent};
    }
`;

const Error = styled.div`
    margin-top: 10px;
    font-size: 15px;
`;

export { SignInContainer, Header, Email, Password, Submit, Error };
