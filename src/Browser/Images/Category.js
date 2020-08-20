import React from "react";

import {
    CategoryContainer,
    LeftImageContainer,
    RightImageContainer,
} from "./Styles/CategoryStyles";

import AsyncImage from "./AsyncImage";
import Loader from "../Components/Loader";
import useEqualHeight from "../../Helpers/useEqualHeight";
import useImagesLoaded from "../../Helpers/useImagesLoaded";

const Category = ({ page }) => {
    const [leftLayout, rightLayout] = useEqualHeight(page);
    const [finishedLoading, onLoad] = useImagesLoaded(page);

    const RightImages = () =>
        rightLayout.map((d) => (
            <AsyncImage onLoad={onLoad} key={d.name} data={d} side={"right"} />
        ));

    const LeftImages = () =>
        leftLayout.map((d) => (
            <AsyncImage onLoad={onLoad} key={d.name} data={d} side={"left"} />
        ));

    return (
        <>
            {finishedLoading && <Loader />}
            <CategoryContainer>
                <LeftImageContainer>
                    <LeftImages />
                </LeftImageContainer>
                <RightImageContainer>
                    <RightImages />
                </RightImageContainer>
            </CategoryContainer>
        </>
    );
};

export default Category;
