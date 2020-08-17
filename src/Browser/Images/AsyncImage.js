import React from "react";
import { Image, ImageContainer } from "./Styles/AsyncImageStyles";
import usePreloadImage from "../../Helpers/usePreloadImage";

const getURLs = ({ urlsString }) => {
    const defaultURL = urlsString.split(",")[0];
    return { defaultURL, urlsString };
};

const AsyncImage = ({ urlData, name, createdAt, date, description, side }) => {
    const [[src, srcSet], loading] = usePreloadImage(getURLs(urlData));

    if (loading) {
        return null;
    }

    return (
        <ImageContainer side={side}>
            <Image src={src} srcSet={srcSet} />
        </ImageContainer>
    );
};

export default AsyncImage;
