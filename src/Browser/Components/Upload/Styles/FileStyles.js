import styled from "styled-components";

const FileContainer = styled.div`
    width: 800px;
    padding: 5px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    margin: 5px 0px;
    align-items: center;
    justify-content: center;
`;

const FileContainerContents = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: space-evenly;
`;

const FileImage = styled.img`
    border 2px solid black;
    border-radius: 5px;
    height: 100px;
    width: auto;
`;

const FileDescriptionContainer = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FileDescription = styled.textarea`
    resize: none;
    height: 100%;
    font-size: 16px;
    padding: 2.5px;
`;

const FileNameContainer = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FileName = styled.input`
    font-size: 16px;
    padding: 2.5px;
`;

const FileDateContainer = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FileDate = styled.input`
    font-size: 16px;
    padding: 2.5px;
`;

const FileCategoryContainer = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FileCategory = styled.select`
    font-size: 16px;
    padding: 2.5px;
`;

const Text = styled.div`
    padding: 2.5px;
    font-size: 20px;
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

const Error = styled(FileContainer)`
    justify-content: center;
    align-items: center;
    height: 100px;
`;

const Loading = Error;

export {
    FileContainer,
    FileContainerContents,
    FileImage,
    FileDescriptionContainer,
    FileDescription,
    FileDateContainer,
    FileDate,
    FileCategoryContainer,
    FileCategory,
    FileName,
    FileNameContainer,
    Submit,
    Text,
    Loading,
    Error,
};
