import React, { useState } from "react";
import {
    Image,
    ImageContainer,
    ImageName,
    ImageNameContainer,
    ModalWrapper,
} from "./Styles/AsyncImageStyles";
import usePreloadImage from "../../Helpers/usePreloadImage";
import ImageModal from "./ImageModal";

const AsyncImage = ({ data, side, onLoad }) => {
    const { name, urlsString } = data;

    const [src, srcSet] = usePreloadImage(
        {
            defaultSrc: urlsString.split(",")[0].split(" ")[0],
            loadedSrc: urlsString,
        },
        onLoad
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
                <Image side={side} src={src} srcSet={srcSet} />
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
