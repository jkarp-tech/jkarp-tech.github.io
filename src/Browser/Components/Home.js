import React, { useState } from "react";

import usePreloadImage from "../../Helpers/usePreloadImage";

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

const Home = ({ image, imageData }) => {
    const [loading, setLoading] = useState(true);

    const img = usePreloadImage({
        url: imageData[0].urlsString,
        callback: () => setLoading(false),
    });

    return (
        <HomepageContainer>
            <ImageContainer>
                <HomepageImage srcSet={loading ? image.srcset : img.srcset} />
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
