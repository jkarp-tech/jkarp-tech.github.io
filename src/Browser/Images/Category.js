import React, { useContext, useState, useEffect } from "react";

import {
    CategoryContainer,
    LeftImageContainer,
    RightImageContainer,
} from "./Styles/CategoryStyles";

import { UrlContext } from "../../Context/UrlProvider";
import AsyncImage from "./AsyncImage";
import Loader from "../Components/Loader";
import { LoaderContext } from "../../Context/LoaderProvider";

const Category = ({ page }) => {
    const urlData = useContext(UrlContext);
    const { loaders, setLoaders } = useContext(LoaderContext);

    const [leftLayout, setLeftLayout] = useState([]);
    const [rightLayout, setRightLayout] = useState([]);

    useEffect(() => {
        if (loaders[page]) {
            setLoaders((l) => {
                return {
                    ...l,
                    [page]: false,
                };
            });
        }
    }, [loaders, page, setLoaders]);

    useEffect(() => {
        const urlArr = urlData[page];

        let left = 0;
        let right = 0;
        let leftLayout = [];
        let rightLayout = [];

        for (let i = 0; i < urlArr.length; i++) {
            if (left <= right) {
                leftLayout.push(urlArr[i]);
                let { width, height } = urlArr[i];
                left += height / width;
            } else {
                rightLayout.push(urlArr[i]);
                let { width, height } = urlArr[i];
                right += height / width;
            }
        }

        setLeftLayout(leftLayout);
        setRightLayout(rightLayout);
    }, [urlData, page]);

    const RightImages = () =>
        rightLayout.map((d) => (
            <AsyncImage urlData={d} key={d.name} side={"right"} />
        ));

    const LeftImages = () =>
        leftLayout.map((d) => (
            <AsyncImage urlData={d} key={d.name} side={"left"} />
        ));

    return (
        <>
            {loaders[page] && <Loader />}
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
