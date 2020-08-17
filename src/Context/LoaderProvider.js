import React, { useState, createContext } from "react";

export const LoaderContext = createContext({});

const LoaderProvider = ({ children }) => {
    const [loaders, setLoaders] = useState({
        home: true,
        birds: true,
        wildlife: true,
        nature: true,
    });

    return (
        <LoaderContext.Provider value={{ loaders, setLoaders }}>
            {children}
        </LoaderContext.Provider>
    );
};

export default LoaderProvider;
