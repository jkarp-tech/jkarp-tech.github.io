import React from "react";
import { isMobile } from "react-device-detect";
import BrowserApp from "./Browser/BrowserApp";
import MobileApp from "./Mobile/MobileApp";

const App = () => (isMobile ? <MobileApp /> : <BrowserApp />);

export default App;
