import React, { useState, useContext } from "react";

import { UrlContext } from "../../Context/UrlProvider";

import {
    HomepageContainer,
    ImageContainer,
    HomepageImage,
    InfoContainer,
    HeadshotContainer,
    Headshot,
    AboutContainer,
    About,
} from "./Styles/HomeStyles";
import AsyncImage from "../Images/Images";
import usePreloadImage from "../../Helpers/usePreloadImage";

const Home = () => {
    const { urlsString } = useContext(UrlContext)[0];
    const defaultUrl = urlsString.split(",")[0];

    const [{ src, srcset }, loading] = usePreloadImage(defaultUrl, urlsString);

    if (loading) {
        return <div> loading ... </div>;
    }

    return (
        <HomepageContainer>
            <ImageContainer>
                <HomepageImage src={src} srcSet={srcset} />
            </ImageContainer>
            <InfoContainer>
                <HeadshotContainer>
                    <Headshot />
                </HeadshotContainer>
                <AboutContainer>
                    <About>About Stuff</About>
                </AboutContainer>
            </InfoContainer>
        </HomepageContainer>
    );
};

export default Home;
