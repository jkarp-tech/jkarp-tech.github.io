import React, { useState } from "react";
import ProgressBar from "../Components/ProgressBar";

const types = ["image/png", "image/jpg", "image/jpeg"];

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

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
        <>
            <form>
                <input type="file" onChange={handleChange} />
            </form>
            {error && <div> Error </div>}
            {file && (
                <ProgressBar
                    file={file}
                    setFile={setFile}
                    collection={"birds"}
                />
            )}
        </>
    );
};

export default UploadForm;
