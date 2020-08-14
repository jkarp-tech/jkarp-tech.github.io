import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Birds, Wildlife, Nature } from "./Images/Categories";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Upload from "./Components/Upload/Upload";
import SignIn from "./Components/Upload/SignIn";

import useFirestore from "../Helpers/useFirestore";
import usePreloadImage from "../Helpers/usePreloadImage";

import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/Configs";
import {
    BrowserAppContainer,
    HorizontalCenter,
} from "./Styles/BrowserAppStyles";

const BrowserApp = () => {
    const [loading, setLoading] = useState(true);

    const [imageData, imgLoading] = useFirestore("homepage");

    const image = usePreloadImage({
        url: imgLoading ? null : imageData[0].urlsString.split(",")[0],
        callback: () => setLoading(false),
    });

    if (imageData === []) {
        return null;
    } else if (loading) {
        return null;
    }
    return (
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
                                <Home image={image} imageData={imageData} />
                            </Route>
                        </Switch>
                        <Footer />
                    </Router>
                </BrowserAppContainer>
            </HorizontalCenter>
        </ThemeProvider>
    );
};
export default BrowserApp;
