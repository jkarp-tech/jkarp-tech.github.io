import React from "react";

import {
    HomepageContainer,
    ImageContainer,
    // HomepageImage,
    InfoContainer,
    AboutContainer,
    About,
} from "./Styles/HomeStyles";
import Loader from "./Loader";
import AsyncImage from "../Images/AsyncImage";
import useImagesLoaded from "../../Helpers/useImagesLoaded";

const Home = () => {
    const [finishedLoading, onLoad, data] = useImagesLoaded("home");

    return (
        <>
            {finishedLoading && <Loader />}
            <HomepageContainer>
                <ImageContainer>
                    <AsyncImage onLoad={onLoad} key={"banner"} data={data[0]} />
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
