import React, { useState } from "react";

import ProgressBar from "./ProgressBar";
import {
    UploadFormContainer,
    Error,
    FileInput,
    Header,
    Submit,
} from "./Styles/UploadFormStyles";

const types = ["image/png", "image/jpg", "image/jpeg"];

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const IsError = ({ children }) => (error ? children : null);

    const IsFile = ({ children }) => (file ? children : null);

    const handleChange = ({ target }) => {
        const tempfile = target.files[0];

        if (tempfile && types.includes(tempfile.type)) {
            setFile(tempfile);
            setError("");
        } else {
            setFile(null);
            setError("Please select an image file (png or jpg)");
        }
    };

    return (
        <UploadFormContainer>
            <Header> Upload Files </Header>
            <FileInput type="file" onChange={handleChange}>
                <Submit> Click To Upload </Submit>
            </FileInput>
            <IsError>
                <Error>{error}</Error>
            </IsError>
            <IsFile>
                <ProgressBar
                    file={file}
                    setFile={setFile}
                    collection={"birds"}
                />
            </IsFile>
        </UploadFormContainer>
    );
};

export default UploadForm;
