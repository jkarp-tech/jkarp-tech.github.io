import React, { useEffect, useRef } from "react";
import useStorage from "../../../Helpers/useStorage";
import { projectFirestore, timestamp } from "../../../Firebase/config";

import { LoadingBar, Error, Text } from "./Styles/ProgressBarStyles";

const ProgressBar = ({
    file,
    onComplete,
    data: { category, description, name, date, height, width },
}) => {
    const data = [
        useStorage(file, 0),
        useStorage(file, 1),
        useStorage(file, 2),
        useStorage(file, 3),
        useStorage(file, 4),
    ];

    const urls = data.map((f) => f.url);
    const progress = data.reduce((prog, f) => prog + f.progress / 5, 0);
    const errors = data.map((f) => f.error);

    const saving = useRef(false);

    useEffect(() => {
        const save = async () => {
            const collectionRef = projectFirestore.collection(category);
            const urlsString = urls.toString();
            const createdAt = timestamp();

            collectionRef
                .add({
                    urlsString,
                    createdAt,
                    description,
                    date,
                    name,
                    height,
                    width,
                })
                .then((doc) => {
                    console.log("saved: ");
                    console.log(doc);
                    onComplete();
                });
        };

        if (!urls.includes(null) && !saving.current) {
            saving.current = true;
            save();
        }

        return () => (saving.current = false);
    }, [urls, category, date, description, name, height, width, onComplete]);

    if (!errors.includes(null)) {
        console.log(errors);
        return <Error>There was an error</Error>;
    }

    return (
        <>
            <Text> Loading ... </Text>
            <LoadingBar progress={progress} />
        </>
    );
};

export default ProgressBar;
