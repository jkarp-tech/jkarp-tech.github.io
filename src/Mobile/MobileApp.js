import React, { useState } from "react";
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
import Footer from "../Browser/Components/Footer";
import {
    ModalContainer,
    ModalLink,
    ModalLinkContainer,
    FooterContainer
} from "./Components/Styles/MobileMobileStyles";
import Modal from "./../Browser/Images/Modal";

import { Birds, Nature, Wildlife } from "./Components/Categories";
//import { Favorites } from "../Browser/Images/Categories";
import About from "./Components/About";
import Shop from "./Components/Shop";
import Contact from "./Components/Contact";

const MobileApp = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <>
            <UrlProvider>
                <LoaderProvider>
                    <ThemeProvider theme={theme}>
                        <Router>
                            {clicked && (
                                <Modal>
                                    <ModalContainer>
                                        <Header
                                            showNav={[clicked, setClicked]}
                                        />
                                        <ModalLinkContainer>
                                            <ModalLink
                                                to={"birds"}
                                                onClick={() =>
                                                    setClicked(c => !c)
                                                }
                                            >
                                                birds
                                            </ModalLink>
                                            <ModalLink
                                                to={"wildlife"}
                                                onClick={() =>
                                                    setClicked(c => !c)
                                                }
                                            >
                                                wildlife
                                            </ModalLink>
                                            <ModalLink
                                                to={"nature"}
                                                onClick={() =>
                                                    setClicked(c => !c)
                                                }
                                            >
                                                nature
                                            </ModalLink>
                                            <ModalLink
                                                to={"about"}
                                                onClick={() =>
                                                    setClicked(c => !c)
                                                }
                                            >
                                                about
                                            </ModalLink>
                                            <ModalLink
                                                to={"shop"}
                                                onClick={() =>
                                                    setClicked(c => !c)
                                                }
                                            >
                                                shop
                                            </ModalLink>
                                            <ModalLink
                                                to={"contact"}
                                                onClick={() =>
                                                    setClicked(c => !c)
                                                }
                                            >
                                                contact
                                            </ModalLink>
                                        </ModalLinkContainer>
                                    </ModalContainer>
                                </Modal>
                            )}
                            {!clicked && (
                                <>
                                    <Header showNav={[clicked, setClicked]} />
                                    <Switch>
                                        <Route exact path="/birds">
                                            <Birds> birds </Birds>
                                        </Route>
                                        <Route exact path="/wildlife">
                                            <Wildlife> wildlife </Wildlife>
                                        </Route>
                                        <Route exact path="/nature">
                                            <Nature> nature </Nature>
                                        </Route>
                                        <Route exact path="/about">
                                            <About> about </About>
                                        </Route>
                                        <Route exact path="/shop">
                                            <Shop> Shop </Shop>
                                        </Route>
                                        <Route exact path="/contact">
                                            <Contact> contact </Contact>
                                        </Route>
                                        <Redirect to="/birds" />
                                    </Switch>
                                    <Footer />
                                </>
                            )}
                        </Router>
                    </ThemeProvider>
                </LoaderProvider>
            </UrlProvider>
        </>
    );
};

export default MobileApp;
