import React, { useEffect } from "react";
import useStorage from "../Helpers/useStorage";
import styled from "styled-components";

const Bar = styled.div`
    width: ${(props) => props.progress + "%"};
    height: 5px;
    margin-top 20px;
    background: black;
`;

const ProgressBar = ({ file, setFile, collection }) => {
    const { progress, urls, error } = useStorage(file, collection);

    useEffect(() => {
        console.log(urls);
        if (!urls.includes(null)) {
            setFile(null);
        }
    }, [urls, urls[3], setFile, file]);

    return <Bar progress={progress} />;
};

export default ProgressBar;
