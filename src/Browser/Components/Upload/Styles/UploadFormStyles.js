import styled from "styled-components";
import React, { useRef, cloneElement, Children } from "react";

const UploadFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: ${(props) => props.theme.bodyheight};
`;

const Error = styled.div`
    font-size: 20px;
`;

const FileInput = ({ children, ...props }) => {
    const ref = useRef();

    const handleClick = () => {
        ref.current.click();
    };

    return (
        <>
            <Input ref={ref} {...props} />
            {Children.map(children, (child) =>
                cloneElement(child, { props, onClick: handleClick })
            )}
        </>
    );
};

const Input = styled.input`
    display: none;
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

const Header = styled.div`
    font-size: 30px;
    margin: 30px 0px;
`;

export { UploadFormContainer, Error, FileInput, Header, Submit };
