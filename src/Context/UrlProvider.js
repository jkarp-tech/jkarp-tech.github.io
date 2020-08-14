import React, { useState, useEffect, createContext } from "react";
import useFirestore from "../Helpers/useFirestore";

export const UrlContext = createContext({});

const UrlProvider = ({ children }) => {
    const [data, loading] = useFirestore("homepage");

    if (!data || loading) {
        return <div> loading ... </div>;
    }

    return <UrlContext.Provider value={data}>{children}</UrlContext.Provider>;
};

export default UrlProvider;
