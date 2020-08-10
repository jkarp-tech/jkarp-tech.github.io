import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Birds, Wildlife, Nature } from "./Images/Categories";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Contact from "./Components/Contact";

import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/Configs";
import {
    BrowserAppContainer,
    HorizontalCenter,
} from "./Styles/BrowserAppStyles";

const BrowserApp = () => (
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
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </BrowserAppContainer>
        </HorizontalCenter>
    </ThemeProvider>
);

export default BrowserApp;
