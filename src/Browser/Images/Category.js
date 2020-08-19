import React, { useContext, useState, useLayoutEffect } from "react";

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
    const dataLength = urlData[page].length;

    const { loaders, setLoaders } = useContext(LoaderContext);

    const [leftLayout, setLeftLayout] = useState([]);
    const [rightLayout, setRightLayout] = useState([]);
    const [imagesLoaded, setImagesLoaded] = useState(0);

    useLayoutEffect(() => {
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

    useLayoutEffect(() => {
        if (loaders[page] && imagesLoaded === urlData[page].length) {
            setLoaders((l) => ({
                ...l,
                [page]: false,
            }));
        }
    }, [loaders, page, imagesLoaded, urlData, setLoaders]);

    const onLoad = () => {
        setImagesLoaded((idx) => (idx !== dataLength ? idx + 1 : idx));
    };

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
