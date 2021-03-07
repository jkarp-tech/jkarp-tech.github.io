import React, { useState, useRef } from 'react'
import {
    Image,
    ImageContainer,
    ImageName,
    ImageNameContainer,
    ModalWrapper,
} from './Styles/AsyncImageStyles'
import usePreloadImage from '../../Helpers/usePreloadImage'
import ImageModal from './ImageModal'
import useIntersectionObserver from '../../Helpers/useIntersectionObserver'
import Modal from './Modal'

const formatURL = (urlsString) => ({
    defaultSrc: urlsString.split(',')[0].split(' ')[0],
    loadedSrc: urlsString,
})

const AsyncImage = ({ data, side, onLoad, openable = true }) => {
    const { name, urlsString } = data

    const img = useRef(null)
    const inView = useIntersectionObserver(img)

    const [src, srcSet] = usePreloadImage(formatURL(urlsString), onLoad, inView)

    const [clicked, setClicked] = useState(false)
    const handleOpen = () => {
        if (openable) {
            setClicked(true)
        }
    }

    return (
        <>
            {clicked && (
                <Modal>
                    <ModalWrapper>
                        <ImageModal
                            setClicked={setClicked}
                            data={data}
                            src={src}
                            srcSet={srcSet}
                        />
                    </ModalWrapper>
                </Modal>
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
    )
}

export default AsyncImage
