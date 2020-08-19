import { useEffect, useState } from "react";

const usePreloadImage = ({ defaultSrc, loadedSrc }, onLoad = () => {}) => {
    const [srcset, setSrcSet] = useState(defaultSrc);

    useEffect(() => {
        const srcpreloadimage = new Image();
        const srcsetpreloadimage = new Image();

        srcpreloadimage.src = defaultSrc;
        srcpreloadimage.onload = () => {
            onLoad();
        };

        srcsetpreloadimage.srcset = loadedSrc;
        srcsetpreloadimage.onload = () => {
            setSrcSet(loadedSrc);
            onLoad();
        };

        return () => {
            srcpreloadimage.onload = null;
            srcsetpreloadimage.onload = null;
        };
    }, [loadedSrc, defaultSrc, onLoad]);

    return [defaultSrc, srcset];
};

export default usePreloadImage;
