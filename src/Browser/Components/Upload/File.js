import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

import {
    FileContainer,
    FileContainerContents,
    FileImage,
    FileDescriptionContainer,
    FileDescription,
    FileDateContainer,
    FileDate,
    FileCategoryContainer,
    FileCategory,
    FileNameContainer,
    FileName,
    Submit,
    Text,
    Error,
} from "./Styles/FileStyles";

const types = ["image/png", "image/jpg", "image/jpeg"];
const categories = ["birds", "wildlife", "nature"];

const File = ({ input }) => {
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [category, setCategory] = useState(categories[0]);
    const [name, setName] = useState(input.name);
    const [src, setSrc] = useState(null);

    const [didSubmit, setDidSubmit] = useState(false);
    const [finished, setFinished] = useState(false);
    const [error, setError] = useState(null);

    const FileCategoryOptions = () => {
        return categories.map((c) => (
            <option key={c} value={c}>
                {c}
            </option>
        ));
    };

    const SubmitRender = ({ children }) => {
        if (finished) {
            return children[2];
        } else if (didSubmit) {
            return children[1];
        } else {
            return children[0];
        }
    };

    useEffect(() => {
        if (types.includes(input.type)) {
            setFile(input);

            const reader = new FileReader();

            reader.onload = () => {
                setSrc(reader.result);
            };

            reader.readAsDataURL(input);
        } else {
            setError(`You accidentally 
            tried to upload: ${input.name}. Please only include png/jpg/jpeg`);
        }
    }, [input]);

    const handleDescription = ({ target: { value } }) => {
        setDescription(value);
    };

    const handleDate = ({ target: { value } }) => {
        setDate(value);
    };

    const handleCategory = ({ target: { value } }) => {
        setCategory(value);
    };

    const handleName = ({ target: { value } }) => {
        setName(value);
    };

    const handleSubmit = () => {
        setDidSubmit(true);
    };

    if (error) {
        return <Error>{error}</Error>;
    }

    return (
        <FileContainer>
            <FileImage src={src} />
            <FileContainerContents>
                <FileNameContainer>
                    <Text>Name:</Text>
                    <FileName
                        disabled={finished}
                        value={name}
                        onChange={handleName}
                    />
                </FileNameContainer>
                <FileDescriptionContainer>
                    <Text>Desciption:</Text>
                    <FileDescription
                        disabled={finished}
                        onChange={handleDescription}
                    />
                </FileDescriptionContainer>
                <FileDateContainer>
                    <Text>Date</Text>
                    <FileDate
                        type={"date"}
                        disabled={finished}
                        value={date}
                        onChange={handleDate}
                    />
                </FileDateContainer>
                <FileCategoryContainer>
                    <Text>Category:</Text>
                    <FileCategory
                        disabled={finished}
                        value={category}
                        onChange={handleCategory}
                    >
                        <FileCategoryOptions />
                    </FileCategory>
                </FileCategoryContainer>
            </FileContainerContents>
            <SubmitRender>
                <Submit onClick={handleSubmit}>Submit</Submit>
                <ProgressBar
                    file={file}
                    data={{ category, description, date, name }}
                    onComplete={() => setFinished(true)}
                />
                <Text> Finished Submitting </Text>
            </SubmitRender>
        </FileContainer>
    );
};

export default File;
