import React, { useState } from "react";
import {
    ModalContent,
    ModalName,
    ModalDescription,
    ModalDate,
    ModalContainer,
    ModalImage,
    ModalSvg,
    ModalHeader,
    ModalHeaderContainer,
    Info,
    FullHeight
} from "./Styles/ModalStyles";

const ImageModal = ({ setClicked, data, src, srcSet }) => {
    const { name, height, width, description, date } = data;

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setClicked(false);
    };

    const handleInfo = () => {
        setShow((s) => !s);
    };

    return (
        <ModalContainer>
            <ModalHeaderContainer>
                <ModalHeader>
                    <ModalSvg src={"/Images/close.svg"} onClick={handleClose} />
                    <ModalSvg src={"/Images/info.svg"} onClick={handleInfo} />
                </ModalHeader>
            </ModalHeaderContainer>
                <ModalContent larger={height >= width}>
                    <ModalImage
                        larger={height >= width}
                        show={show}
                        src={src}
                        srcSet={srcSet}
                    />
                    <Info show={show}>
                        <ModalName>{name}</ModalName>
                        <ModalDate>{date}</ModalDate>
                        <ModalDescription>{description}</ModalDescription>
                    </Info>
                </ModalContent>
        </ModalContainer>
    );
};

export default ImageModal;
