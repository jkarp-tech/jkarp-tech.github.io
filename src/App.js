import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import BrowserApp from "./Browser/BrowserApp";
import MobileApp from "./Mobile/MobileApp";
// import UploadForm from "./Upload/UploadForm";

const App = () => (
    <>
        <BrowserView>
            <BrowserApp />
        </BrowserView>
        <MobileView>
            <MobileApp />
        </MobileView>
    </>
);

export default App;
