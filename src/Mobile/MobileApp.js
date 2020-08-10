import React from "react";
import { withOrientationChange } from "react-device-detect";

const MobileApp = ({ isLandscape, isPortrait }) => {
    return <div>MobileApp</div>;
};

export default withOrientationChange(MobileApp);
