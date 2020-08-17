import React, { useState, useLayoutEffect } from "react";

const useWindowSize = () => {
    const [size, setSize] = useState();

    useLayoutEffect(() => {
        const updateSize = () => {
            setSize(window.innerWidth);
        };
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => {
            window.removeEventListener("resize", updateSize);
        };
    }, []);

    return size;
};

export default useWindowSize;
