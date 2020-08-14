import React, { useEffect, useState } from "react";

const getDefaultURL = (urlsString) => {
    return urlsString.split(",")[0];
};

const AsyncImage = ({ urlsString, Image }) => {
    const [loaded, setLoaded] = useState(false);

    const showImage = () => {
        setLoaded(true);
    };

    return (
        <>
            <Image src={getDefaultURL(urlsString)} loaded={!loaded} />
            <Image onLoad={showImage} srcSet={urlsString} loaded={loaded} />
        </>
    );
};

export default AsyncImage;
