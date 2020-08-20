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
} from "./Styles/ModalStyles";

import Modal from "./Modal";

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
                <ModalContent larger={height >= width} show={show}>
                    <ModalImage
                        larger={height >= width}
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
        </Modal>
    );
};

export default ImageModal;
