import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import BrowserApp from "./Browser/BrowserApp";
import MobileApp from "./Mobile/MobileApp";
import AnonymousProvider from "./Context/AnonymousProvider";

const App = () => (
    <AnonymousProvider>
        <BrowserView>
            <BrowserApp />
        </BrowserView>
        <MobileView>
            <MobileApp />
        </MobileView>
    </AnonymousProvider>
);

export default App;
