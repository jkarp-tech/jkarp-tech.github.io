import React, { createContext } from "react";
import useFirestore from "../Helpers/useFirestore";
import Loader from "../Browser/Components/Loader";

export const UrlContext = createContext({});

const UrlProvider = ({ children }) => {
    const [home, homeLoading] = useFirestore("homepage");
    const [birds, birdLoading] = useFirestore("birds");
    const [wildlife, wildlifeLoading] = useFirestore("wildlife");
    const [nature, natureLoading] = useFirestore("nature");

    debugger;
    if (homeLoading || birdLoading || wildlifeLoading || natureLoading) {
        return null;
    }

    return (
        <UrlContext.Provider value={{ home, birds, wildlife, nature }}>
            {children}
        </UrlContext.Provider>
    );
};

export default UrlProvider;
