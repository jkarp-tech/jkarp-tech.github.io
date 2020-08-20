import { useLayoutEffect, useState, useContext } from "react";
import { UrlContext } from "../Context/UrlProvider";

const useEqualHeight = (page) => {
    const urlData = useContext(UrlContext);
    const urlArr = urlData[page];

    const [leftLayout, setLeftLayout] = useState([]);
    const [rightLayout, setRightLayout] = useState([]);

    useLayoutEffect(() => {
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
    }, [urlArr]);

    return [leftLayout, rightLayout];
};

export default useEqualHeight;
