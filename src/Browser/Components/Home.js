import React, { useContext, useEffect } from "react";

import { UrlContext } from "../../Context/UrlProvider";

import {
    HomepageContainer,
    ImageContainer,
    HomepageImage,
    InfoContainer,
    AboutContainer,
    About,
} from "./Styles/HomeStyles";
import usePreloadImage from "../../Helpers/usePreloadImage";
import Loader from "./Loader";
import { LoaderContext } from "../../Context/LoaderProvider";

const getURLs = ({ urlsString }) => {
    const defaultURL = urlsString.split(",")[0];
    return { defaultURL, urlsString };
};

const Home = () => {
    const urlData = useContext(UrlContext);
    const { loaders, setLoaders } = useContext(LoaderContext);

    const [[mainSrc, mainSrcSet], mainLoading] = usePreloadImage(
        getURLs(urlData.home[0])
    );

    useEffect(() => {
        if (loaders["home"]) {
            setLoaders((l) => {
                return {
                    ...l,
                    home: false,
                };
            });
        }
    }, [loaders, setLoaders]);

    return (
        <>
            {(mainLoading || loaders["home"]) && <Loader />}
            <HomepageContainer>
                <ImageContainer>
                    <HomepageImage src={mainSrc} srcSet={mainSrcSet} />
                </ImageContainer>
                <InfoContainer>
                    <AboutContainer>
                        <About>
                            "Photographing nature brings such great joy. It has
                            taught me appreciation for the fragile world around
                            us which changes moment by moment."
                        </About>
                    </AboutContainer>
                </InfoContainer>
            </HomepageContainer>
        </>
    );
};

export default Home;
