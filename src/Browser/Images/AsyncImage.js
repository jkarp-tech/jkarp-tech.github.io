import React from "react";
import { Image, ImageContainer, LoadingImage } from "./Styles/AsyncImageStyles";
import usePreloadImage from "../../Helpers/usePreloadImage";

const getURLs = (urlsString) => {
    const defaultURL = urlsString.split(",")[0];
    return [defaultURL, urlsString];
};

const AsyncImage = ({ data, side, onLoad }) => {
    const { name, height, width, createdAt, description, urlsString } = data;
    const [src, srcSet] = usePreloadImage(
        {
            defaultSrc: urlsString.split(",")[0].split(" ")[0],
            loadedSrc: urlsString,
        },
        onLoad
    );

    return (
        <ImageContainer side={side}>
            <Image src={src} srcSet={srcSet} />
        </ImageContainer>
    );
};

export default AsyncImage;
