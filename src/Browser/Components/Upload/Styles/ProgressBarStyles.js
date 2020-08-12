import styled from "styled-components";

const LoadingBar = styled.div`
    width: ${(props) => props.progress + "%"};
    border-radius: 5px;
    height: 7px;
    margin: 8px;
    background: black;
    align-self: flex-start;
`;

const Error = styled.div`
    font-size: 16px;
    padding: 5px;
`;

const Text = Error;

export { LoadingBar, Error, Text };
