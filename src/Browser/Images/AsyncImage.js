import React, { useState, useRef } from "react";
import {
    Image,
    ImageContainer,
    ImageName,
    ImageNameContainer,
    ModalWrapper,
} from "./Styles/AsyncImageStyles";
import usePreloadImage from "../../Helpers/usePreloadImage";
import ImageModal from "./ImageModal";
import useIntersectionObserver from "../../Helpers/useIntersectionObserver";

const formatURL = (urlsString) => ({
    defaultSrc: urlsString.split(",")[0].split(" ")[0],
    loadedSrc: urlsString,
});

const AsyncImage = ({ data, side, onLoad }) => {
    const { name, urlsString } = data;

    const img = useRef(null);
    const inView = useIntersectionObserver(img);

    const [src, srcSet] = usePreloadImage(
        formatURL(urlsString),
        onLoad,
        inView
    );

    const [clicked, setClicked] = useState(false);
    const handleOpen = () => {
        if (side) {
            setClicked(true);
        }
    };

    return (
        <>
            {clicked && (
                <ModalWrapper>
                    <ImageModal
                        clicked={clicked}
                        setClicked={setClicked}
                        data={data}
                        src={src}
                        srcSet={srcSet}
                    />
                </ModalWrapper>
            )}
            <ImageContainer side={side} onClick={handleOpen}>
                <Image ref={img} side={side} src={src} srcSet={srcSet} />
                {side && (
                    <ImageNameContainer side={side}>
                        <ImageName>{name}</ImageName>
                    </ImageNameContainer>
                )}
            </ImageContainer>
        </>
    );
};

export default AsyncImage;
