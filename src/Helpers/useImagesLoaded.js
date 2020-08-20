import { useState, useLayoutEffect, useContext } from "react";
import { LoaderContext } from "../Context/LoaderProvider";

import { UrlContext } from "../Context/UrlProvider";

const useImagesLoaded = (page) => {
    const urlData = useContext(UrlContext);

    const { loaders, setLoaders } = useContext(LoaderContext);
    const currLoader = loaders[page];

    const [imagesLoaded, setImagesLoaded] = useState(0);
    const dataLength = urlData[page].length;

    useLayoutEffect(() => {
        if (currLoader && imagesLoaded >= dataLength) {
            setTimeout(
                () =>
                    setLoaders((l) => ({
                        ...l,
                        [page]: false,
                    })),
                250
            );
        }
    }, [currLoader, page, imagesLoaded, dataLength, setLoaders]);

    const onLoad = () => {
        setImagesLoaded((idx) => (idx <= dataLength ? idx + 1 : idx));
    };

    return [imagesLoaded <= dataLength || currLoader, onLoad, urlData[page]];
};

export default useImagesLoaded;
