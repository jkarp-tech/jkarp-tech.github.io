import React, { useState, useRef } from "react";
import {
    Image,
    ImageContainer,
    ImageName,
    ModalInfoContainer,
    ModalName,
    ModalDescription,
    ModalDate,
    ModalContainer,
    ModalImage,
    ModalSvg,
    ModalHeader,
    ModalHeaderContainer,
    ModalImageContainer,
    ImageNameContainer,
    Info,
} from "./Styles/AsyncImageStyles";
import usePreloadImage from "../../Helpers/usePreloadImage";
import Modal from "./Modal";

const AsyncImage = ({ data, side, onLoad }) => {
    const {
        name,
        height,
        width,
        createdAt,
        description,
        urlsString,
        date,
    } = data;

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

    const handleClose = ({ target }) => {
        setClicked(false);
    };

    const handleInfo = () => {
        debugger;
    };

    const ShouldRender = ({ children }) => (clicked ? children : null);

    return (
        <>
            <ShouldRender>
                <Modal>
                    <ModalContainer>
                        <ModalHeaderContainer>
                            <ModalHeader>
                                <ModalSvg
                                    src={"/Images/close.svg"}
                                    onClick={handleClose}
                                />
                                <ModalSvg
                                    src={"/Images/info.svg"}
                                    onClick={handleInfo}
                                />
                            </ModalHeader>
                        </ModalHeaderContainer>
                        <ModalInfoContainer larger={height >= width}>
                            <ModalImage
                                larger={height >= width}
                                src={src}
                                srcSet={srcSet}
                            />
                        </ModalInfoContainer>
                    </ModalContainer>
                </Modal>
            </ShouldRender>
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
