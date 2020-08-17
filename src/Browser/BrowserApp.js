import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Birds, Wildlife, Nature } from "./Images/Categories";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Upload from "./Components/Upload/Upload";
import SignIn from "./Components/Upload/SignIn";

// import useFirestore from "../Helpers/useFirestore";
// import usePreloadImage from "../Helpers/usePreloadImage";

import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/Configs";
import {
    BrowserAppContainer,
    HorizontalCenter,
} from "./Styles/BrowserAppStyles";
import UrlProvider from "../Context/UrlProvider";
import LoaderProvider from "../Context/LoaderProvider";

const BrowserApp = () => {
    return (
        <UrlProvider>
            <LoaderProvider>
                <ThemeProvider theme={theme}>
                    <HorizontalCenter>
                        <BrowserAppContainer>
                            <Router>
                                <Header />
                                <Switch>
                                    <Route exact path="/birds">
                                        <Birds />
                                    </Route>
                                    <Route exact path="/wildlife">
                                        <Wildlife />
                                    </Route>
                                    <Route exact path="/nature">
                                        <Nature />
                                    </Route>
                                    <Route exact path="/contact">
                                        <Contact />
                                    </Route>
                                    <Route exact path="/upload">
                                        <Upload />
                                    </Route>
                                    <Route exact path="/signin">
                                        <SignIn />
                                    </Route>
                                    <Route path="/">
                                        <Home />
                                    </Route>
                                </Switch>
                                <Footer />
                            </Router>
                        </BrowserAppContainer>
                    </HorizontalCenter>
                </ThemeProvider>
            </LoaderProvider>
        </UrlProvider>
    );
};
export default BrowserApp;
