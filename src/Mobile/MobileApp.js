import React from "react";
import { withOrientationChange } from "react-device-detect";
import Header from "./Components/Header";
import UrlProvider from "../Context/UrlProvider";

const MobileApp = ({ isLandscape, isPortrait }) => {
    return (
        <UrlProvider>
            <Header />
        </UrlProvider>
    );
};

export default withOrientationChange(MobileApp);
