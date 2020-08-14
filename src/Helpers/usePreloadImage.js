import { useEffect, useState } from "react";

const usePreloadImage = ({ url = null, callback = () => {} }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const preloader = (url) => {
            const preloadimage = new Image();
            preloadimage.srcset = url;
            preloadimage.onload = () => {
                callback();
                console.log("loading");
            };
            return preloadimage;
        };

        if (data) {
            return;
        } else if (url) {
            setData(preloader(url));
        } else {
            setData(null);
        }
    }, [url, callback, data]);

    return data;
};

export default usePreloadImage;
