import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
import Header from './Components/Header'
import UrlProvider from '../Context/UrlProvider'
import LoaderProvider from '../Context/LoaderProvider'
import { ThemeProvider } from 'styled-components'
import { theme } from './Styles/Configs'
import Footer from '../Browser/Components/Footer'
import {
    ModalContainer,
    ModalLink,
    ModalLinkContainer,
    FooterContainer,
} from './Components/Styles/MobileMobileStyles'
import Modal from './../Browser/Images/Modal'

import { Birds, Nature, Wildlife } from './Components/Categories'
import { Favorites } from '../Browser/Images/Categories'

const MobileApp = () => {
    const [clicked, setClicked] = useState(false)
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
                                                to={'birds'}
                                                onClick={() =>
                                                    setClicked((c) => !c)
                                                }
                                            >
                                                birds
                                            </ModalLink>
                                            <ModalLink
                                                to={'wildlife'}
                                                onClick={() =>
                                                    setClicked((c) => !c)
                                                }
                                            >
                                                wildlife
                                            </ModalLink>
                                            <ModalLink
                                                to={'nature'}
                                                onClick={() =>
                                                    setClicked((c) => !c)
                                                }
                                            >
                                                nature
                                            </ModalLink>
                                            <ModalLink
                                                to={'favorites'}
                                                onClick={() =>
                                                    setClicked((c) => !c)
                                                }
                                            >
                                                favorites
                                            </ModalLink>
                                            <ModalLink
                                                to={'contact'}
                                                onClick={() =>
                                                    setClicked((c) => !c)
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
                                            <Birds> Birds </Birds>
                                        </Route>
                                        <Route exact path="/wildlife">
                                            <Wildlife> wildlife </Wildlife>
                                        </Route>
                                        <Route exact path="/nature">
                                            <Nature> nature </Nature>
                                        </Route>
                                        <Route exact path="/favorites">
                                            <Favorites> favorites </Favorites>
                                        </Route>
                                        <Route exact path="/contact">
                                            <div> contact </div>
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
    )
}

export default MobileApp
