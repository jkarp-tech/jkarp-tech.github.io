import React, { useEffect, useRef } from "react";
import useStorage from "../../../Helpers/useStorage";
import styled from "styled-components";
import { projectFirestore, timestamp } from "../../../Firebase/config";

const Bar = styled.div`
    width: ${(props) => props.progress + "%"};
    height: 5px;
    margin-top 20px;
    background: black;
`;

const ProgressBar = ({ file, setFile, collection }) => {
    const data = [
        useStorage(file, 1),
        useStorage(file, 2),
        useStorage(file, 3),
        useStorage(file, 4),
    ];

    const urls = data.map((f) => f.url);
    const progress = data.reduce((prog, f) => prog + f.progress, 0);
    const errors = data.map((f) => f.errors);

    const saving = useRef(false);

    useEffect(() => {
        const save = async () => {
            const collectionRef = projectFirestore.collection(collection);
            const urlsString = urls.toString();
            const createdAt = timestamp();

            collectionRef.add({ urlsString, createdAt }).then((doc) => {
                setFile(null);
            });
        };

        if (!urls.includes(null) && !saving.current) {
            saving.current = true;
            save();
        }

        return () => (saving.current = false);
    }, [urls, setFile, collection]);

    return (
        <>
            <Bar progress={progress} />
            {!errors.includes(null) && <div> {"Errors"}</div>}
        </>
    );
};

export default ProgressBar;
