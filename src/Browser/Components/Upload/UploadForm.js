import React, { useState } from "react";

import File from "./File";
import {
    UploadFormContainer,
    FileInput,
    Header,
    Submit,
} from "./Styles/UploadFormStyles";

const UploadForm = () => {
    const [files, setFiles] = useState(null);

    const handleChange = ({ target: { files } }) => {
        // setFiles(files.filter((f) => types.includes(f.type)));
        setFiles(Object.values(files));

        // const tempfile = target.files[0];

        // if (tempfile && types.includes(tempfile.type)) {
        //     setFile(tempfile);
        //     setError("");
        // } else {
        //     setFile(null);
        //     setError("Please select an image file (png or jpg)");
        // }
    };

    const FileUploader = (props) => {
        if (!files) {
            return null;
        }
        return files.map((f) => <File key={f.name} input={f} />);
    };

    return (
        <UploadFormContainer>
            <Header> Upload Files </Header>
            <FileInput
                type="file"
                multiple={"multiple"}
                onChange={handleChange}
            >
                <Submit> Click To Upload </Submit>
            </FileInput>
            <FileUploader />
        </UploadFormContainer>
    );
};

/*
<ProgressBar file={file} setFile={setFile} collection={"birds"} />
*/

export default UploadForm;
