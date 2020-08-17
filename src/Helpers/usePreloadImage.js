import { useEffect, useState } from "react";

const usePreloadImage = ({ defaultURL, urlsString }) => {
    const [srcset, setSrcSet] = useState(defaultURL);
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
        srcpreloader(defaultURL);
    }, [urlsString, defaultURL]);

    return [[defaultURL, srcset], loading];
};

export default usePreloadImage;
