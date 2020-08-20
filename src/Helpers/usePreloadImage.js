import { useEffect, useState } from "react";

const usePreloadImage = (
    { defaultSrc, loadedSrc },
    onLoad = () => {},
    inView = true
) => {
    const [srcset, setSrcSet] = useState(defaultSrc);

    useEffect(() => {
        const srcpreloadimage = new Image();

        srcpreloadimage.src = defaultSrc;
        srcpreloadimage.onload = () => {
            onLoad();
        };

        return () => {
            srcpreloadimage.onload = null;
        };
    }, [defaultSrc, onLoad]);

    useEffect(() => {
        const srcsetpreloadimage = new Image();
        if (inView) {
            srcsetpreloadimage.srcset = loadedSrc;
            srcsetpreloadimage.onload = () => {
                setSrcSet(loadedSrc);
                onLoad();
            };
        }
        return () => {
            srcsetpreloadimage.onload = null;
        };
    }, [inView, loadedSrc, onLoad]);

    return [defaultSrc, srcset];
};

export default usePreloadImage;
