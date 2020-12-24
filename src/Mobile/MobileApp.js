import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import Header from "./Components/Header";
import UrlProvider from "../Context/UrlProvider";
import LoaderProvider from "../Context/LoaderProvider";
import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/Configs";
import Footer from "../Browser/Components/Footer"

import { Birds, Nature, Wildlife } from "./Components/Categories";

const MobileApp = () => {
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
                                <Wildlife> wildlife </Wildlife>
                            </Route>
                            <Route exact path="/nature">
                                <Nature> nature </Nature>
                            </Route>
                            <Route exact path="/contact">
                                <div> contact </div>
                            </Route>
                            <Redirect to="/birds" />
                        </Switch>
                        <Footer/>
                    </Router>
                </ThemeProvider>
            </LoaderProvider>
        </UrlProvider>
    );
};

export default MobileApp;
