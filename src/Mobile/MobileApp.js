import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom"
import { withOrientationChange } from "react-device-detect";
import Header from "./Components/Header";
import UrlProvider from "../Context/UrlProvider";
import LoaderProvider from "../Context/LoaderProvider";
import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/Configs"

import { Birds } from "./Components/Categories"


const MobileApp = ({ isLandscape, isPortrait }) => {
    return (
        <UrlProvider>
            <LoaderProvider>
                <ThemeProvider theme={theme}>
                    <Router>
                        <Header />
                        <Switch>
                            <Route exact path="/birds">
                                <Birds> Birds </Birds>
                            </Route>
                            <Route exact path="/wildlife">
                                <div> wildlife </div>
                            </Route>
                            <Route exact path="/nature">
                                <div> nature </div>
                            </Route>
                            <Route exact path="/contact">
                                <div> contact </div>
                            </Route>
                            <Redirect to="/birds" />
                        </Switch>
                    </Router>
                </ThemeProvider>
            </LoaderProvider>
        </UrlProvider>
    );
};

export default withOrientationChange(MobileApp);
