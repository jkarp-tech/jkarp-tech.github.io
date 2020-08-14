import { useEffect, useState } from "react";

const usePreloadImage = (src, urlsString) => {
    const [srcset, setSrcSet] = useState(src);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const srcpreloader = (url) => {
            const preloadimage = new Image();
            preloadimage.src = url;
            preloadimage.onload = () => {
                setLoading(false);
            };
        };

        const srcsetpreloader = (urlsString) => {
            const preloadimage = new Image();
            preloadimage.srcset = urlsString;
            preloadimage.onload = () => {
                setSrcSet(urlsString);
                setLoading(false);
            };
        };

        srcsetpreloader(urlsString);
        srcpreloader(src);
    }, [urlsString]);

    return [{ src, srcset }, loading];
};

export default usePreloadImage;
