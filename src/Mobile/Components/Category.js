import React, { useContext } from "react";

import AsyncImage from "../../Browser/Images/AsyncImage";
import Loader from "../../Browser/Components/Loader";
import useImagesLoaded from "../../Helpers/useImagesLoaded";
import { CategoryContainer, ImageContainer } from "./Styles/CategoryStyles"


import { UrlContext } from "../../Context/UrlProvider";

const Category = ({ page }) => {
    const urlData = useContext(UrlContext);
    const [finishedLoading, onLoad] = useImagesLoaded(page);

    const urlArr = urlData[page];
    
    const Images = () => {
        return urlArr.map((d) => (
            <AsyncImage onLoad={onLoad} key={d.name} data={d} />
        ));
    }

    return (
        <>
            {finishedLoading && <Loader />}
            <CategoryContainer>
                <ImageContainer>
                    <Images/>
                </ImageContainer>
            </CategoryContainer>
        </>
    );
};

export default Category;